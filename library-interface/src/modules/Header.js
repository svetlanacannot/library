import React, { useState, useEffect } from 'react'
import { Link, useLocation, Navigate } from "react-router-dom";
import auth from '../auth.js'


import "../assets/scss/modules/header.scss"

import FindForm from './FindForm';

const Header = ({ setFindVal, setListType }) => {
    const location = useLocation();
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const logoutBtnClickHandle = () => {
        auth.logout()
        setShouldRedirect(true)
    }

    useEffect(() => {
      shouldRedirect === true && setShouldRedirect(false)
    }, [shouldRedirect])

    const profileNavShowEvent = () => {
        const nav = document.querySelector(".header__nav")
        if(nav.style.display == "block"){
            nav.style = "display: none;"
        } else {
            nav.style = "display: block;"
        }
        
    }    
    
    const chioseListShowEvent = () => {
        const list = document.querySelector(".header__list")
        if(list.style.display == "block"){
            list.style = "display: none;"
        } else {
            list.style = "display: block;"
        }
        
    }    

  return (
      <>
      {location.pathname === '/login' || location.pathname === '/signup' ? <Link className='home-link' to='/'>Главная</Link> : 
      <div className='header'>
        <div className='header__inner container container--2'>
        {location.pathname === '/profile' ? <Link className='home-link' to='/'>Главная</Link> :
        <>
                <FindForm setFindVal={setFindVal}/>
                
                 <div className='header__right'>
                 {auth.role === 'Администратор' ?
                    <div onClick={() => {chioseListShowEvent()}} className='header__choise'>
                        <span id="choise">Все книги</span>
                        <img className='header__arrow' src={require(`../assets/img/icons/dropdown.png`)}/>
                        <div className='header__list'>
                            <div className='header__type header__type--active' onClick={() => {setListType("all"); document.querySelector("#choise").innerHTML="Все книги"}}>Все книги</div>
                            <div className='header__type' onClick={() => {setListType("hold"); document.querySelector("#choise").innerHTML="Отложенные"}}>Отложенные</div>
                            <div className='header__type' onClick={() => {setListType("given"); document.querySelector("#choise").innerHTML="Выданные"}}>Выданные</div>
                            <div className='header__type' onClick={() => {setListType("overdue"); document.querySelector("#choise").innerHTML="Просроченные"}}>Просроченные</div>
                            <div className='header__type' onClick={() => {setListType("users"); document.querySelector("#choise").innerHTML="Читатели"}}>Читатели</div>
                        </div>
                    </div> :
                    <div className='header__info'>
                        <p>ул. Название улицы, д.111</p>
                        <a href='tel:89876543210'>8(987)654-32-10</a>
                    </div>}
                    
                    {auth.isAuthenticated() ?
                    <>
                    <div onClick={() => {profileNavShowEvent()}} className='header__profile'>
                        <div className='header__name'>{auth.name}</div>
                        <img className='header__photo' src={require(`../assets/img/profile_photos/${auth.photo}`)} alt=""/>
                        <nav className='header__nav'>
                            <Link className='header__item' to='/profile'>Профиль</Link>
                            <div onClick={() => {logoutBtnClickHandle()}} className='header__item'>Выйти</div>
                        </nav>
                    </div>
                    </>  : 
                    <div className='header__links'>
                        <Link className='header__link' to='/login'>Войти</Link>
                        <Link className='header__link' to='/signup'>Регистрация</Link>
                    </div>}
                    
                </div></>}
        </div>
        {shouldRedirect && location.pathname != '/' ? <Navigate replace to="/" /> : null}
    </div>}
    
    </>
  )
}

export default Header