import React from 'react';
import './style.css';
import propTypes from 'prop-types';
function Profile({fullName, bio, profession, children }) {
  return( <div>
      <h1 className='profile'>{fullName}</h1>
      <h3 className='profile'>{bio}</h3>
      <h3  style={{
                width: "18rem",
                height: "5rem",
         marginLeft: "40%" ,
                backgroundColor: "blue",
                borderRadius: "8px",
                border: "solid",
                boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)"
            }}>{profession}</h3>
      {children}
  </div>
  )
};
Profile.defaultProps={
fullName:"foulen",
bio:"hello",
profession:"moudir"
}

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  // children: propTypes.node.isRequired
}

export default Profile;
