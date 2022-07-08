import React from 'react'

import '../assets/scss/modules/form.scss'

const Form = ({ title, children, btn }) => {
  return (
    <form className='form'>
        <h1 className='form__title'>{title}</h1>
        <div className='form__inner'>
          {children}
        </div>
        {btn}
    </form>
  )
}

export default Form