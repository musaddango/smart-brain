import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from '../components/Navigation/Navigation';
import './App.css';

import ProfileModal from '../pages/Profile.modal';
import HomePage from '../pages/Home.page';
import SigninPage from '../pages/Signin.page';
import RegistrationPage from '../pages/Register.page';

import controller from './App.controller';


class App extends Component {
  constructor() {
    super();
    this.state = controller.initialState;
    this.onMountAction = controller.onMountAction.bind(this);
    this.loadUserAction = controller.loadUserAction.bind(this);
    this.onRouteChangeAction = controller.onRouteChangeAction.bind(this);
    this.calculateFaceLocationAction = controller.calculateFaceLocationAction.bind(this);
    this.buttonSubmitAction = controller.buttonSubmitAction.bind(this);
  }

  componentDidMount = () => {
    this.onMountAction();
  }

  loadUser = (data) => {
    this.loadUserAction(data);
  }

  calculateFaceLocation = (data) => {
    return this.calculateFaceLocationAction(data);
    }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.buttonSubmitAction();
  }

  onRouteChange = (route) => {
    this.onRouteChangeAction(route);
  }

  profileModalToggle = () => {
    this.setState((prevState)=>(
      {
        ...prevState,
        isModalOpen: !this.state.isModalOpen
      })
      )
  }

  render() {
    const { isModalOpen, isSignedIn, imageUrl, route, box, user } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation 
          isSignedIn={isSignedIn} 
          onRouteChange={this.onRouteChange} 
          profileModalToggle= {this.profileModalToggle}
          />
        {isModalOpen && 
          <ProfileModal 
            isModalOpen={isModalOpen} 
            profileModalToggle={this.profileModalToggle}
            user={user} loadUser={this.loadUser} 
          />
           }
        { route === 'home'
          ?   
              <HomePage
                name={this.state.user.name}
                entries={this.state.user.entries}
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                box={box} imageUrl={imageUrl} 
              />
          : (
             route === 'signin'
             ? <SigninPage loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <RegistrationPage loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
