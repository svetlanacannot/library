import React from 'react'

import '../assets/scss/modules/find.scss'

const FindForm = ({ findRef }) => {
  return (
    <form className='find'>
        <input className='find__input' type="text" name='find' placeholder='Название, автор' ref={findRef}/>
        <button className='find__btn'>Найти</button>
    </form>
  )
}

export default FindForm