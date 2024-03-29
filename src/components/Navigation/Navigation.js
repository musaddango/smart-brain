import React from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

function Navigation ({ onRouteChange, isSignedIn, profileModalToggle }) {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ProfileIcon onRouteChange= {() => onRouteChange('signout')} profileModalToggle={profileModalToggle}/>
          {/* <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p> */}
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;