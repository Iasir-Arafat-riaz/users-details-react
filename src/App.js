import logo from './logo.svg';
import './App.css';
import userData from "./data/data.json"
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';
import Cart from './components/Users/Cart/Cart';

function App() {
  const [user,setUser]=useState([])
  const[cart,setCart]=useState([])
  const eventHandler=()=>{
    console.log("kire lullu")
  }
  useEffect(()=>{
    setUser(userData)
    console.log(userData)
  },[])
  return (
    <div className="App">
      {user.map(usr=><Users user={usr} key={usr.id} eventHandler={eventHandler}></Users>)}
      <Cart></Cart>
      
      <h1></h1>
    </div>
  );
}

export default App;
