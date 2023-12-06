import React, { useEffect, useState } from 'react'
import { Book } from './types'
import BookshelfItem from './BookshelfItem'
import styled from 'styled-components'
import { breakpoints, colour, text } from '../../../shared/styles'
import Loading from '../../../shared/Loading'
import Error from '../../../shared/Error'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

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

const BookshelfNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

const NavItem = styled.div`
  font-size: 24px;
  line-height: 12px;
  padding: 10px;
  border-radius: 50%;
  color: ${text.fade};
  background: ${colour.cardBackground};
  transition: 0.25s background, 0.25s color;
  cursor: pointer;

  &:hover {
    color: ${text.normal};
    background: ${colour.cardHeader};
  }
`

const BookshelfSection: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState<Array<Book>>([])
  const [page, setPage] = useState<number>(0)
  const [maxPage, setMaxPage] = useState<boolean>(false)
  const [opened, setOpened] = useState<number>(0)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      const res = await fetch(`/api/books/getBooks?page=${page}`)
      if (res.ok) {
        const data = await res.json()
        setError(false)
        setBooks(data.books)
        setMaxPage(data.maxPage)
        setOpened(0)
      } else {
        setError(true)
      }
      setLoading(false)
    }
    fetchBooks()
  }, [page])

  if (loading) return <Loading />

  if (error) return <Error />

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
          <BookshelfNav>
            {page !== 0 && <NavItem onClick={() => setPage(page - 1)}><FaCaretLeft /></NavItem>}
            {!maxPage && <NavItem onClick={() => setPage(page + 1)}><FaCaretRight /></NavItem>}
          </BookshelfNav>
      </Bookshelf>
    </BookshelfSectionWrapper>
  )
}

export default BookshelfSection
