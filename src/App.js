import logo from './logo.svg';
import './App.css';
import userData from "./data/data.json"
import { useEffect, useState } from 'react';
import Users from './components/Users/Users';

function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    setUser(userData)
    console.log(userData)
  },[])
  return (
    <div className="App">
      {user.map(usr=><li>{usr.name}</li>)}
      <Users></Users>
      <h1></h1>
    </div>
  );
}

export default App;
