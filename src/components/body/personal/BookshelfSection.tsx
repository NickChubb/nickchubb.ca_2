import React from 'react';
import { BsLink45Deg } from 'react-icons/bs'
import { bookData } from '../../../data/books';
import StyledLink from '../../shared/link';

const BookshelfSection = () => {
  return (
    <ul>
      {bookData && bookData.length > 0
        ? bookData.map((book, key) => (
            <li className="links-menu"  key={key}>
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
            </li>
          ))
        : null}
    </ul>
  );
};

export default BookshelfSection;
