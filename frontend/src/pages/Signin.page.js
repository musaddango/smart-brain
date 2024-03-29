import Signin from "../components/Signin/Signin";

const SigninPage = (props)=>{
    return (
        <Signin loadUser={props.loadUser} onRouteChange={props.onRouteChange}/>
    )
}

export default SigninPage;