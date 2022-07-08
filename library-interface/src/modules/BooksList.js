import React, {useState, useEffect} from 'react'
import Book from './Book'
import axios from 'axios'
import auth from '../auth';
import User from './User';

const BooksList = ({ findVal, listType, setHold }) => {
  
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState([]);
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://library/library-api/get_books.php`,
      headers: { 'content-type': 'application/json' }
    }).then(result => {
      setBooks(result.data)
    })
  }, [])

  useEffect(() => {
    setShowBooks(books)
  },[books])
  
  useEffect(() => {
    let arr = []
    books.map(book => {
      if(book.name.includes(findVal) || book.author.includes(findVal)){
        arr.push(book)
      }
    })
    setShowBooks(arr)
  },[findVal])

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://library/library-api/get_adminbooks.php`,
      headers: { 'content-type': 'application/json' }
    }).then(result => {
      if(listType==='hold'){
        setShowBooks(result.data.hold)
      }
      if(listType==='given'){
        setShowBooks(result.data.given)
      }
      // if(listType==='all'){
      //   if(books != null){
      //     setShowBooks(books)
      //   }
      // }
      if(listType==='overdue'){
        let arr = []
        result.data.given.forEach(book => {
          //today
          let today = new Date();

          //sqldate
          let sqlStr = book.date.toString()
          var YMDhms = sqlStr.split("-")
          let sqlDate = new Date()
          sqlDate.setFullYear(parseInt(YMDhms[0]), parseInt(YMDhms[1])-1, parseInt(YMDhms[2]))

          if(today.getTime() > sqlDate.getTime()){
            arr.push(book)
          }
        })
        setShowBooks(arr)
      }
    })

    if(listType === 'users'){
      axios({
        method: 'post',
        url: `http://library/library-api/get_users.php`,
        headers: { 'content-type': 'application/json' }
      }).then(result => {
        setUsers(result.data)
      })
    }
    
  },[listType])
    

  return (
    <div className='books-list'>
        {auth.role != 'Администратор' || listType != "users" ? showBooks.map(book => {
          return <Book book={book} key={book.id} setHold={setHold}/>
        }) : null}
        {listType === 'users' ? users.map(user => {
          return <User user={user} key={user.id}/>
        }) : null}
    </div>
  )
}

export default BooksList