import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { bookData } from '../../../data/books'
import { ExternalLink } from '../../shared/link'
import { text } from '../../shared/styles'

const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`

const BookListItem = styled.li`
  &:hover {
    &:before {
      color: ${text.green};
    }
  }

  &:before {
    content: '>  ';
  }
`

const BookshelfSection = () => {
  return (
    <BookList>
      <Fade>
        {bookData && bookData.length > 0
          ? bookData.map((book, key) => (
              <BookListItem className="links-menu" key={key}>
                <ExternalLink href={book.link} target="_blank" rel="noreferrer">
                  <b>{book.title}</b> <i>by</i> {book.author}{' '}
                </ExternalLink>
                {/* {
                // If book has notes display BookNotes component
                book.Notes && book.Notes.length > 0 ? (
                  <BookNotes notes={book.Notes} />
                ) : null
              } */}
              </BookListItem>
            ))
          : null}
      </Fade>
    </BookList>
  )
}

export default BookshelfSection
