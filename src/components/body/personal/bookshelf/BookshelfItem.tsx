import React, { useState } from 'react'
import { Book } from './types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid green;
`

const Title = styled.div``

const BookshelfItem: React.FC<{ book: Book }> = ({ book }) => {
  const { title, authors, description, imageLinks } = book
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)
  return (
    <Wrapper>
      <Title onClick={toggle}>
        {title} by {authors[0]}
      </Title>
      {isOpen && <small>{description}</small>}
      {imageLinks && imageLinks.thumbnail && <img src={imageLinks.thumbnail} />}
    </Wrapper>
  )
}

export default BookshelfItem
