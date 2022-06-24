import React from 'react'
import { Link, useLocation } from "react-router-dom";
import auth from '../auth.js'

import "../assets/scss/modules/header.scss"

import FindForm from './FindForm';

const Header = () => {
    const location = useLocation();

  return (
      <>
      {location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/profile' ? <Link className='home-link' to='/'>Главная</Link> : 
      <div className='header'>
        <div className='header__inner container container--2'>
                <FindForm/>
                <div className='header__right'>
                    <div className='header__info'>
                        <p>ул. Название улицы, д.111</p>
                        <a href='tel:89876543210'>8(987)654-32-10</a>
                    </div>
                    {auth.isAuthenticated() ? 
                    <Link className='header__profile' to='/profile'>
                        <div className='header__name'>{auth.name}</div>
                        <img className='header__photo' src={require(`../assets/img/profile_photos/${auth.photo}`)} alt=""/>
                    </Link> : 
                    <div className='header__links'>
                        <Link className='header__link' to='/login'>Войти</Link>
                        <Link className='header__link' to='/signup'>Регистрация</Link>
                    </div>}
                    
                </div>
        </div>
    </div>}
    
    </>
  )
}

export default Header