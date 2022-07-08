import React, { useEffect, useState } from 'react'
import axios from 'axios'
import auth from '../auth'
import UserBooksList from './UserBooksList'
import '../assets/scss/modules/userbooks.scss'

const UserBooks = ({ hold, setHold }) => {

  const [given, setGiven] = useState()

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://library/library-api/get_userbooks.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        'userId': auth.id
      }
    }).then(result => {
      setHold(result.data.hold)
      setGiven(result.data.given)
    })
  } , [])

  return (
    <div className='userbooks'>
      {given ? <UserBooksList title="Книги выданы:" books={given}/> : null}
      {hold ? <UserBooksList title="Книги отложены:" books={hold} type="hold"/> : null}
    </div>
  )
}

export default UserBooks