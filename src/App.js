import logo from './logo.svg';
import './App.css';
import userData from "./data/data.json"
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import Cart from './components/Cart/Cart';

function App() {
  const [user,setUser]=useState([])
  const[cart,setCart]=useState([])
  
  useEffect(()=>{
    setUser(userData)
    console.log(userData)
  },[]);
  const eventHandler=(user)=>{
    const newCart=[...cart,user];
    setCart(newCart)
    console.log("hlw")
  }
  return (
    <div style={{display: 'flex'}} className="App">
      <div style={{width:"25%", backgroundColor:"goldenRod"}}>
      <Cart total={cart}></Cart>
      </div>
      <div className="user">
      {user.map(usr=><Users user={usr} key={usr.id} eventHandler={eventHandler}></Users>)}
      </div>
      
      
      <h1></h1>
    </div>
  );
}

export default App;
