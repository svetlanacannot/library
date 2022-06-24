import React from 'react'

const FormField = ({ label, type, inputRef}) => {
  return (
    <label className='form__field'>
        <span className='form__label'>{label}</span>
        <input className='form__input' type={type} ref={inputRef}/>
    </label>
  )
}

export default FormField