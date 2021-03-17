import React from 'react';
import "./Users.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    
 
    const {name,email,image,address,salary}=props.user
    

    
    return (
        <div className="userComponent">
            <img src={image} alt=""/>
           <h1>Name : {name}</h1>
           <h5>Email Address : {email}</h5>
           <p>City : {address.city}</p>
           <p>Salary : ${salary}</p>
           <button 
           style={{backgroundColor:"orange",height:"25px"}}
           onClick={()=>props.eventHandler(props.user)}>
               <FontAwesomeIcon icon={faPlusSquare} />
               click here</button>
        </div>
    );
};

export default Users;