import React from 'react'

const UserBook = ({ book, type }) => {
  return (
    <li className='userbooks__book'>
        <div className='userbooks__main'>
            <div className='userbooks__txt'>
                <span>"{book.name}" </span>
                <span>{book.author}</span>
            </div>
            <div className='userbooks__footer'>
                {type != "hold" ? <button className='btn btn--beige userbooks__btn'>Продлить</button> : null}
                <div className='userbooks__date'>до {book.date}</div>
            </div>
        </div>
        
    </li>
  )
}

export default UserBook