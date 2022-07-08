import React from 'react'
import '../assets/scss/modules/user.scss'

const User = ({ user }) => {
  return (
    <div className='user'>
        <img className='user__photo' src={user?.photo != null ? require('../assets/img/profile_photos/' + user?.photo) : require('../assets/img/profile_photos/placeholder.png')} alt=""/>
        <div className='user__txt'>
            <h2 className='user__fio'>{user.name} {user.surname} {user.patronymic}</h2>
            <div className='user__info'>
                <p>Телефон: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    </div>
  )
}

export default User