import { map, pick, pipe } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Book } from './types'
import BookshelfItem from './BookshelfItem'
import styled from 'styled-components'
import { breakpoints } from '../../../shared/styles'

const BookshelfSectionWrapper = styled.div`
  @media only screen and (min-width: ${breakpoints.mobile}) {
    overflow-y: scroll;
    height: calc(
      848px - 132px - 62px
    ); // height of tabbed content slider - title - tab nav
  }
`

const Bookshelf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const BookshelfNav = styled.div``

const BookshelfSection: React.FC<{}> = () => {
  const [books, setBooks] = useState<Array<Book>>([])
  const [opened, setOpened] = useState(0)

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books/getBooks')
      const data = await res.json()
      setBooks(data)
    }
    fetchBooks()
  }, [])

  return (
    <BookshelfSectionWrapper>
      <Bookshelf>
        {books &&
          books.map((book, key) => (
            <BookshelfItem
              index={key}
              isOpen={key === opened}
              setOpened={setOpened}
              key={key}
              book={book}
            />
          ))}
          {/* <BookshelfNav>
            <div>{'<'}</div>
            <div>{'>'}</div>
          </BookshelfNav> */}
      </Bookshelf>
    </BookshelfSectionWrapper>
  )
}

export default BookshelfSection
