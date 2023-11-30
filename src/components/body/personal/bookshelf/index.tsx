import { map, pick, pipe } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Book } from './types'
import BookshelfItem from './BookshelfItem'
import styled from 'styled-components'

const BookshelfWrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
`

const BookshelfSection: React.FC<{}> = () => {
  const [books, setBooks] = useState<Array<Book>>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books/getBooks')
      const data = await res.json()
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <BookshelfWrapper>
      {books && books.map((book, key) => (
          <BookshelfItem book={book} />
        )
      )}
    </BookshelfWrapper>
  )
}

export default BookshelfSection
