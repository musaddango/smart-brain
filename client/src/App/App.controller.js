
const initialState = {
    input: '',
    imageUrl: '',
    box: [],
    route: 'signin',
    isSignedIn: false,
    isModalOpen: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: '',
      age: '',
      pet: ''
    }
  }

 export const SERVER_URL= "http://localhost:3000/";

  const verificationHeaders = {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
        };

function buttonSubmitAction (){
    this.setState({imageUrl: this.state.input});
      fetch(SERVER_URL+ 'imageurl', {
        method: 'post',
        headers: verificationHeaders,
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          // Hit the endpoint that increaments entries in the section.
          fetch(SERVER_URL+ 'image', {
            method: 'put',
            headers: verificationHeaders,
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
}

function onMountAction(){
    const token = window.localStorage.getItem("token");
    if(token){
      fetch(SERVER_URL+ "signin",{
        method: 'post',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then((data)=>{
        // console.log(data)
        if(data.authenticated === 'true'){
          fetch(SERVER_URL+ "profile/" + data.authUserId,{
            method: 'get',
            headers: verificationHeaders,
          })
          .then((data)=> data.json())
          .then(user=>{
            if(user.id){
              this.loadUser(user);
              return this.onRouteChange('home');
            }
          })
        }
      })
      .catch((err)=> {})
    }
}

function loadUserAction(data){
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
}

async function onRouteChangeAction(route){
  if (route === 'signout') {
    await fetch(SERVER_URL+ 'logout',{
      method: 'get',
      headers: verificationHeaders
    });
    window.localStorage.removeItem("token");
    return this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

function calculateFaceLocationAction(data){
  const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
  
      const clarifaiFaceRegions = data.outputs[0].data.regions
      let result = [];
      clarifaiFaceRegions.map((item, i) =>{
        const clarifaiItemFace = item.region_info.bounding_box;
        result.push({
          leftCol: clarifaiItemFace.left_col * width,
          topRow: clarifaiItemFace.top_row * height,
          rightCol: width - (clarifaiItemFace.right_col * width),
          bottomRow: height - (clarifaiItemFace.bottom_row * height)
        })
      })
      // console.log(result);
      return result;
}

export default {
    buttonSubmitAction,
    onMountAction,
    initialState,
    loadUserAction,
    onRouteChangeAction,
    calculateFaceLocationAction
}