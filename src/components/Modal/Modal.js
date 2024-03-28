import { createPortal } from "react-dom";
import './Modal.css';

const modalRoot =document.querySelector('#modal-root');

function Modal(props){;

    return( createPortal(props.children, modalRoot) )
}

export default Modal

