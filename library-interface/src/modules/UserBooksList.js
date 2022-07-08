import React from 'react'
import UserBook from './UserBook'

const UserBooksList = ({ title, books, type }) => {
  return (
    <ol className='userbooks__list'>
        <h2 className='userbooks__title'>{title}</h2>
        {books?.map(book => {
            return <UserBook book={book} key={book.opId} type={type}/>
        })}
        
    </ol>
  )
}

export default UserBooksList