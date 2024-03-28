import Register from "../components/Register/Register";

const RegistrationPage = (props)=>{
    return(
        <Register loadUser={props.loadUser} onRouteChange={props.onRouteChange}/>
    )
}

export default RegistrationPage;