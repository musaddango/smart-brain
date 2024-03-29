import { useState, memo } from 'react';

import { SERVER_URL} from '../../App/App.controller';
import './Profile.css';
import avatar from './businessman-character-avatar.jpg';

const Profile = memo(function Profile ({ profileModalToggle, user, loadUser}){
    const [state, setState] = useState({
        name: user.name,
        age: user.age,
        pet: user.pet
    });
    const [errorCheck, setErrorCheck] = useState(null);

    const onFormChange = (event) =>{
        switch(event.target.name){
            case 'user-name':
                setState({...state, name: event.target.value});
                break;
            case 'user-age':
                setState({...state, age: event.target.value});
                break;
            case 'user-pet':
                setState({...state, pet: event.target.value});
                break;
            default:
                return state;
        }
    }

    const onButtonSubmit = ()=>{
        fetch(SERVER_URL+ 'profile/'+ user.id,{
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({name: state.name,
                age: state.age,
                pet: state.pet})
        })
        .then((response)=> response.json())
        .then((data)=> {
           if (data === "success") {
            setErrorCheck("no-error") 
            loadUser({...user, ...state})
            }else{
                setErrorCheck("error");
            }
        })
        .catch(error=> setErrorCheck("error"));
    }

    return (
        <div className="profile-modal">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                <main className="pa4 black-80 w-80">
                    <img
                        src={avatar}
                        className="h3 w3 dib" alt="avatar" />
                    <h1>{state.name}</h1>
                    <h4>Images Submitted: {user.entries}</h4>
                    <p>Member since: {new Date(user.joined).toLocaleString()}</p>
                    <hr />
                        <label className="mt2 fw6 black" htmlFor="name">Name:</label>
                        <input
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        type="text"
                        name="user-name"
                        id="name"
                        placeholder={user.name}
                        onChange={onFormChange}
                        />
                    
                        <label className="mt2 fw6" htmlFor="email-address">Age:</label>
                        <input
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        type="text"
                        name="user-age"
                        id="age"
                        placeholder={user.age}
                        onChange={onFormChange}
                        />

                        <label className="mt2 fw6" htmlFor="password">Pet:</label>
                        <input
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        type="text"
                        name="user-pet"
                        id="pet"
                        placeholder={user.pet}
                        onChange={onFormChange}
                        />
                        <hr />
                    {errorCheck === "error" && <p className='light-red'>Something went wrong while trying to update information. Please, try again in a bit</p>}
                    {errorCheck === "no-error" && <p className='green'>Information updated successfully</p>}
                    <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <button 
                            className='b pa2 pointer grow hover-white w-40 bg-light-blue b--black-20'
                            onClick={onButtonSubmit}
                            >
                            Save
                        </button>
                        <button onClick={profileModalToggle} className='b pa2 pointer grow hover-white w-40 bg-light-red b--black-20'>
                            Cancel
                        </button>
                    </div>
                </main>
                <div className="flex flex-display-right"><h2 style={{marginTop: '20px'}} ><span className=" pointer" onClick={profileModalToggle}>&times;</span></h2></div>
            </article>
        </div>)
})

export default Profile;