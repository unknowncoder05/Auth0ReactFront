import React from "react";

const Profile = (props) => {
    return (
        <div>
            <img src={props.user.picture} alt={props.user.name} />
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    );
  
};

export default Profile;