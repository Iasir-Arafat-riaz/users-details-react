import React from 'react';
import "./Users.css"

const Users = (props) => {
    
 
    const {name,email,image,address,salary}=props.user
    

    
    return (
        <div className="userComponent">
            <img src={image} alt=""/>
           <h1>Name : {name}</h1>
           <h5>Email Address : {email}</h5>
           <p>City : {address.city}</p>
           <p>Salary : ${salary}</p>
           <button onClick={()=>props.eventHandler(props.user)}>click here</button>
        </div>
    );
};

export default Users;