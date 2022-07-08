import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Navigate } from "react-router-dom";

import Form from './Form'
import FormField from './FormField'

const Signup = () => {

  const surnameRef = useRef()
  const nameRef = useRef()
  const patronymicRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const passRef = useRef()
  const rePassRef = useRef()

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const signupBtnClickHandle = () => {
    axios({
      method: 'post',
      url: `http://library/library-api/signup.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        surname: surnameRef.current.value,
        name: nameRef.current.value,
        patronymic: patronymicRef.current?.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        pass: passRef.current.value
      }
    })
    surnameRef.current.value = null
    nameRef.current.value = null
    patronymicRef.current.value = null
    emailRef.current.value = null
    phoneRef.current.value = null
    passRef.current.value = null
    rePassRef.current.value = null
    setShouldRedirect(true)
  }

  return (
    <>
    <div className='fullpage'>
      <Form title="Введите свои данные" btn={<button type='button' onClick={()=>{signupBtnClickHandle()}} className='btn btn--brown form__btn form__btn--single'>Зарегистрироваться</button>}>
        <FormField label="Фамилия" type="text" inputRef={surnameRef}/>
        <FormField label="Имя" type="text" inputRef={nameRef}/>
        <FormField label="Отчество" type="text" inputRef={patronymicRef}/>
        <FormField label="Электронная почта" type="email" inputRef={emailRef}/>
        <FormField label="Мобильный телефон" type="text" inputRef={phoneRef}/>
        <FormField label="Пароль" type="password" inputRef={passRef}/>
        <FormField label="Пароль повторно" type="password" inputRef={rePassRef}/>
        
      </Form>
    </div>
    {shouldRedirect && <Navigate replace to="/login" />}
    </>
  )
}

export default Signup