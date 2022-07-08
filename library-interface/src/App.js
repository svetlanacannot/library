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

  const findRef = useRef()
  const [findVal, setFindVal] = useState()
  const [listType, setListType] = useState('all')

  const [hold, setHold] = useState()

  return (
    <div className="App">
      <Header setFindVal={setFindVal} setListType={setListType}/>
      <Routes>
        <Route exact path='/' element={<Home findVal={findVal} listType={listType} hold={hold} setHold={setHold}/>} />
        <Route path='/bookpage' element={<BookPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile hold={hold} setHold={setHold}/>} />
      </Routes>
    </div>
  );
}

export default App;
