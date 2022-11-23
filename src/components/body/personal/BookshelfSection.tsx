import React from 'react';
import { BsLink45Deg } from 'react-icons/bs'
import styled from 'styled-components';
import { bookData } from '../../../data/books';
import StyledLink from '../../shared/link';

const BookList = styled.ul``

const BookListItem = styled.li`
  padding: 4px 0;
`

const BookshelfSection = () => {
  return (
    <BookList>
      {bookData && bookData.length > 0
        ? bookData.map((book, key) => (
            <BookListItem className="links-menu"  key={key}>
              <StyledLink href={book.link} target="_blank" rel="noreferrer">
                <b>{book.title}</b> <i>by</i> {book.author}{' '}
                <small style={{ color: 'seagreen' }}>
                  <BsLink45Deg />
                </small>
              </StyledLink>
              <br />
              {/* {
                // If book has notes display BookNotes component
                book.Notes && book.Notes.length > 0 ? (
                  <BookNotes notes={book.Notes} />
                ) : null
              } */}
            </BookListItem>
          ))
        : null}
    </BookList>
  );
};

export default BookshelfSection;
