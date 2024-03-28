import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Navigation from "../components/Navigation/Navigation";

const HomePage = (props)=>{
    return(
        <div>
            <Logo />
            <Rank
            name={props.name}
            entries={props.entries}
            />
            <ImageLinkForm
            onInputChange={props.onInputChange}
            onButtonSubmit={props.onButtonSubmit}
            />
            <FaceRecognition box={props.box} imageUrl={props.imageUrl} />
        </div>
    )
}

export default HomePage;