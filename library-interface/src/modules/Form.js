import React from 'react'

import '../assets/scss/modules/form.scss'

const Form = ({ title, children }) => {
  return (
    <form className='form'>
        <h1 className='form__title'>{title}</h1>
        {children}
    </form>
  )
}

export default Form