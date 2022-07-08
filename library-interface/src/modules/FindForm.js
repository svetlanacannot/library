import React, { useRef } from 'react'

import '../assets/scss/modules/find.scss'

const FindForm = ({ setFindVal }) => {

  const findRef = useRef()
  const findClickHandle = () => {
    setFindVal(findRef.current.value)
  }

  return (
    <form className='find'>
        <input className='find__input' type="text" name='find' placeholder='Название, автор' ref={findRef}/>
        <button type='button' onClick={findClickHandle} className='find__btn'>Найти</button>
    </form>
  )
}

export default FindForm