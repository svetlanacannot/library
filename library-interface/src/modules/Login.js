import React, {useRef, useState, useEffect} from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import auth from '../auth.js'
import Form from './Form'
import FormField from './FormField'

const Login = () => {

  const loginRef = useRef()
  const passRef = useRef()

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const loginBtnClickHandle = () => {
    axios({
      method: 'post',
      url: `http://library/library-api/login.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        login: loginRef.current.value,
        pass: passRef.current.value
      }
    }).then(result => {
      if(result.data){
        setShouldRedirect(true)
        auth.login(result.data)
      }
    })

    loginRef.current.value = null
    passRef.current.value = null
  }

  return (
    <>
    <div className='fullpage'>
      <Form title="Войдите в систему">
        <FormField label='Логин' type="text" inputRef={loginRef}/>
        <FormField label='Пароль' type="password" inputRef={passRef}/>
        <div className='form__btns'>
            <button onClick={()=>{loginBtnClickHandle()}} type="button" className='form__btn btn btn--brown'>Войти</button>
            <Link to='signup' className='form__btn btn btn--beige'>Регистрация</Link>
        </div>
      </Form>
    </div>
    {shouldRedirect && <Navigate replace to="/" />}
    </>
  )
}

export default Login