import React from 'react'
import BooksList from './BooksList'
import UserBooksList from './UserBooksList'

const Home = () => {
  return (
    <div className='home container container--2'>
        <BooksList/>
        <UserBooksList/>
    </div>
  )
}

export default Home