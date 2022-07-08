import React, { useState, useEffect, useRef } from 'react'
import BooksList from './BooksList'
import UserBooks from './UserBooks.js'
import auth from '../auth.js'
import '../assets/scss/modules/home.scss'
import Form from './Form'
import FormField from './FormField'
import axios from 'axios'

const Home = ({ findVal, listType, hold, setHold }) => {

  

  const nameRef = useRef()
  const descrRef = useRef()
  const authorRef = useRef()
  const photoRef = useRef()
  const numRef = useRef()

  const addBtnClickHandle = () => {
    document.querySelector(".modal-inner").style = "display: flex;"
    document.querySelector(".modal-bg").style = "display: block;"
  }

  const bgClickHandle = () => {
    document.querySelector(".modal-inner").style = "display: none;"
    document.querySelector(".modal-bg").style = "display: none;"
 }

 const addFormHandle = () => {
  axios({
    method: 'post',
    url: `http://library/library-api/add_book.php`,
    headers: { 'content-type': 'application/json' },
    data: {
      'name': nameRef.current.value,
      'author': authorRef.current.value,
      'descr': descrRef.current.value,
      'photo': photoRef.current.value,
      'num': numRef.current.value
    }
  })
    nameRef.current.value = null
    authorRef.current.value = null
    descrRef.current.value = null
    photoRef.current.value = null
    numRef.current.value = null
    bgClickHandle()
 }

  return (
    <div className='home container container--2'>
        <BooksList findVal={findVal} listType={listType} setHold={setHold}/>
        {auth.isAuthenticated() && auth.role === "Читатель" ? <UserBooks hold={hold} setHold={setHold}/> : null}
        {auth.role === 'Администратор' ? <div className='home__btns'>
          <button onClick={()=>{addBtnClickHandle()}} className='btn btn--beige home__btn'>Добавить книгу</button>
          <button className='btn btn--brown  home__btn'>Удалить книгу</button>
        </div> : null}
        <div onClick={()=>{bgClickHandle()}} className='modal-bg'></div>
        <div className='modal-inner'>
            <Form title="Добавить книгу">
              <FormField label="Название" type={'text'} inputRef={nameRef}/>
              <FormField label="Автор" type={'text'} inputRef={authorRef}/>
              <FormField label="Описание" type={'text'} inputRef={descrRef}/>
              <FormField label="Фото" type={'text'} inputRef={photoRef}/>
              <FormField label="Количество" type={'number'} inputRef={numRef}/>
              <button onClick={()=>{addFormHandle()}} type="button" className='btn btn--beige modal-btn'>Добавить</button>
            </Form>
          </div>
    </div>
  )
}

export default Home