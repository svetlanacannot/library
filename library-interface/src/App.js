import Header from "./modules/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import BookPage from "./modules/BookPage";
import Login from "./modules/Login";
import Signup from "./modules/Signup";
import Profile from "./modules/Profile";
import {useRef, useState} from 'react'

import "./assets/scss/base/helpers.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/bookpage' element={<BookPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
