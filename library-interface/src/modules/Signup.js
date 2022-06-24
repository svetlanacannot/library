import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import Form from './Form'
import FormField from './FormField'

const Signup = () => {
  const [formData, setFormData] = useState()

  const surnameRef = useRef()
  const nameRef = useRef()
  const patronymicRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const passRef = useRef()
  const rePassRef = useRef()

  const signupBtnClickHandle = () => {
    setFormData({
      surname: surnameRef.current.value,
      name: nameRef.current.value,
      patronymic: patronymicRef.current?.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      pass: passRef.current.value
    })
  }

  useEffect(() => {
    if(formData !== {}){
      axios({
        method: 'post',
        url: `http://library/library-api/signup.php`,
        headers: { 'content-type': 'application/json' },
        data: formData
      })
    }

    surnameRef.current.value = null
    nameRef.current.value = null
    patronymicRef.current.value = null
    emailRef.current.value = null
    phoneRef.current.value = null
    passRef.current.value = null
    rePassRef.current.value = null
    
  }, [formData])

  return (
    <div className='fullpage'>
      <Form title="Введите свои данные">
        <FormField label="Фамилия" type="text" inputRef={surnameRef}/>
        <FormField label="Имя" type="text" inputRef={nameRef}/>
        <FormField label="Отчество" type="text" inputRef={patronymicRef}/>
        <FormField label="Электронная почта" type="email" inputRef={emailRef}/>
        <FormField label="Мобильный телефон" type="text" inputRef={phoneRef}/>
        <FormField label="Пароль" type="password" inputRef={passRef}/>
        <FormField label="Пароль повторно" type="password" inputRef={rePassRef}/>
        <button type='button' onClick={signupBtnClickHandle} className='btn btn--brown form__btn form__btn--single'>Зарегистрироваться</button>
      </Form>
    </div>
  )
}

export default Signup