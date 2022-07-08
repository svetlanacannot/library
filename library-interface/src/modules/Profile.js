import React from 'react'
import auth from '../auth.js'
import UserBooks from './UserBooks'
import '../assets/scss/modules/profile.scss'

const Profile = ({ hold, setHold }) => {
  return (
    <div className='profile container container--2'>
      <div className='profile__inner'>
        <img src={require('../assets/img/profile_photos/' + auth.photo)} className='profile__img'/>
        <div className='profile__main'>
          <div className='profil__txt'>
            <p className='profile__fio'>{auth.surname} {auth.name} {auth.patronymic}</p>
            <div className='profile__info'>
              <p>Дата рождения: {auth.date}</p>
              <p>Телефон: {auth.phone}</p>
              <p>Email: {auth.email}</p>
            </div>
          </div>
          <button className='btn btn--beige profile__btn'>Изменить</button>
        </div>
      </div>
      <UserBooks hold={hold} setHold={setHold}/>
    </div>
  )
}

export default Profile