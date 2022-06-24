import React from 'react'
import auth from '../auth.js'
import "../assets/scss/modules/book.scss"

const Book = ({ book }) => {
  return (
    <div className='book'>
        <img src={require('../assets/img/books/' + book.photo)} alt='Обложка' className='book__img'/>
        <div className="book__column">
            <h3 className='book__name'>{book.name}</h3>
            <p className='book__author'>{book.author}</p>
            <p className='book__descr'>{book.descr}</p>
        </div>
        <div className='book__column'>
            <p className='book__num'>{book.num} шт. в наличии</p>
            <div className='book__btns'>
                {auth.isAuthenticated() ? <button className='book__btn btn btn--beige'>Отложить</button> : null}
                <button className='book__btn btn btn--brown'>Скачать</button>
            </div>
        </div>
    </div>
  )
}

export default Book