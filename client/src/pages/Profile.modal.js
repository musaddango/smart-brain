import Modal from "../components/Modal/Modal";
import Profile from "../components/ProfileIcon/Profile";

const ProfileModal = (props)=>{
    return(
        <Modal>
          <Profile 
            isModalOpen={props.isModalOpen} 
            profileModalToggle={props.profileModalToggle} 
            user={props.user}
            loadUser={props.loadUser}
            />
        </Modal>
    )
}

export default ProfileModal;