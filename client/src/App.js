import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { userSelector, useDispatch } from "react-redux";
// import { loginUser, clearUser } from './reducer/userSlice';
import { loginUser, clearUser } from './reducer/userSlice';
import firebase from './firebase.js';

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import List from './components/post/List'
import Write from './components/post/Write'
import Home from './pages/Home'
import Detail from './components/post/Detail'
import Modify from './components/post/Modify'
import Login from './components/user/Login'
import Join from './components/user/Join'


const App = () => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo: ", userInfo)
    })
  }, []);

  useEffect(() => {
    firebase.auth().signOut();
  }, []);


  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/detail/:postNum' element={<Detail />}></Route>
          <Route path='/modify/:postNum' element={<Modify />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App