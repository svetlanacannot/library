import React, {useState, useEffect} from 'react'
import Book from './Book'
import axios from 'axios'

const BooksList = () => {
  
  const [books, setBooks] = useState([]);
  //const [showBooks, setShowBooks] = useState(books);

  useEffect(() => {
    axios({
      method: 'post',
      url: `http://library/library-api/get_books.php`,
      headers: { 'content-type': 'application/json' }
    }).then(result => {
      console.log(result.data)
      setBooks(result.data)
      //setShowBooks(result.data)
    })
  }, [])
  

    

  return (
    <div className='books-list'>
        {books.map(book => {
          return <Book book={book} key={book.name}/>
        })}
    </div>
  )
}

export default BooksList