import React from 'react';
import avatar from './businessman-character-avatar.jpg';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import PropTypes from 'prop-types';

function ProfileIcon ({ profileModalToggle, onRouteChange, direction, ...args }){
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const ModalToggle = () => profileModalToggle();

    return(
        <div className='pa4 tc'>
            <div className="d-flex p-5">
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                    <DropdownToggle
                        data-toggle="dropdown"
                        tag="span"
                    >
                        <img
                        src={avatar}
                        className="br-100 h3 w3 dib" alt="avatar" />
                    </DropdownToggle>
                    <DropdownMenu {...args} 
                        end
                        className='b--transparent shadow-5' 
                        style={{marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
                        <DropdownItem onClick={ModalToggle}>View Profile</DropdownItem>
                        <DropdownItem onClick={()=>onRouteChange()}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

export default ProfileIcon;