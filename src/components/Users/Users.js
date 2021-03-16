import React from 'react';

const Users = (props) => {
    
 
    const {name,email,image,address}=props.user
    return (
        <div>
            <img src={image} alt=""/>
           <h1>user name : {name}</h1>
           <h5>Email Address : {email}</h5>
           <p>City : {address.city}</p>
           <button onClick={props.eventHandler}>click here</button>
        </div>
    );
};

export default Users;