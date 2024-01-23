import logo from './logo.svg';
import './App.css';

import AllMainComponents from './component/AllMainComponents';
import Mainfrom from './component/Mainfrom';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import { UserAuthContextProvider } from './context/UserAuthentication';
import Login from './component/Login';


function App() {
const storeuserDatainfo = JSON.parse(localStorage.getItem("username"));
const [toggel ,setToggel] = useState(false)
const [userInfo, setUserInfo] = useState(storeuserDatainfo || [])  ;
const [tog, setTog] = useState(false)
  function handleopen(name){
    setToggel(!toggel)
  }
  function handletoggel(){
    setTog(!tog)
   }
  useEffect(()=>{

    localStorage.setItem("username", JSON.stringify(userInfo));

  },[])

console.log(storeuserDatainfo,userInfo)
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={ <AllMainComponents handleopen={handleopen} userInfo={userInfo} handletoggel={handletoggel} tog={tog}></AllMainComponents> }></Route>
     </Routes>
     </UserAuthContextProvider>
  <Mainfrom toggel={toggel} setToggel={setToggel} setUserInfo={setUserInfo}></Mainfrom>
    </div>
  );
}

export default App;
