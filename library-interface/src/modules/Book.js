import React, { useState } from 'react'
import axios from 'axios';
import auth from '../auth.js'
import "../assets/scss/modules/book.scss"

const Book = ({ book, setHold}) => {

  const [num, setNum] = useState(book.num)
  const holdBtnClickHandle = () => {
    axios({
      method: 'post',
      url: `http://library/library-api/hold.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        'bookId': book.id,
        'userId': auth.id
      }
    }).then(result => {
      setNum(parseInt(num, 10) - 1)
      let date = new Date()
      setHold(prev => [...prev, {'name': book.name, 'author': book.author, 'date': "2022-06-22"}])
    })
  }

  return (
    <div className='book'>
        <img src={require('../assets/img/books/' + book.photo)} alt='Обложка' className='book__img'/>
        <div className="book__column">
            <h3 className='book__name'>{book.name}</h3>
            <p className='book__author'>{book.author}</p>
            <p className='book__descr'>{book.descr}</p>
        </div>
        <div className='book__column'>
            <p className='book__num'>{num} шт. в наличии</p>
            <div className='book__btns'>
                {auth.isAuthenticated() ? <button type='button' onClick={()=>{holdBtnClickHandle()}} className='book__btn btn btn--beige'>Отложить</button> : null}
                {auth.role === 'Администратор' ? <button className='book__btn btn btn--brown' type='button'>Выдать</button>
                : <button className='book__btn btn btn--brown'>Скачать</button>}
            </div>
        </div>
    </div>
  )
}

export default Book