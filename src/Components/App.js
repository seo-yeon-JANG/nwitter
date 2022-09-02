import '../App.css';
import React,{useEffect, useState} from 'react';
import Router from 'Components/Router'
import {authService} from 'fbase'

function App() {
  const [init, setInit] = useState(false)
  console.log(authService.currentUser)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true)
      }else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })},[])
  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializing'}
      <footer>&copy; Nwitter {new Date().getFullYear()} </footer>
    </div>
  );
}

export default App;