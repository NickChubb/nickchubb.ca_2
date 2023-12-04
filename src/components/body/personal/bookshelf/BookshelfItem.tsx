import React, { useState } from 'react'
import { Book } from './types'
import styled from 'styled-components'
import { colour, text } from '../../../shared/styles'
import { ExternalLink } from '../../../shared/link'

const Wrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: 0.25s background;

  ${(props) =>
    !props.isOpen
      ? `
      background: ${colour.cardBackground};
  `
      : `
      background: ${colour.cardHeader};
  `}
`

const Header = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  transition: 0.25s background;

  ${(props) =>
    !props.isOpen &&
    `
    cursor: pointer;
    &:hover {
      background: ${colour.cardHeader};
    }
  `}

`

const InfoSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  padding: 0 16px 16px;
`

const DescriptionSection = styled.div``

const Description = styled.p`
  color: ${text.light};
`

const DescriptionInfoLine = styled.small`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  gap: 8px;
`

const MoreLink = styled.small`
  font-family: 'Roboto Mono', monospace;
`

const Date = styled.i`
  color: ${text.light};
`

const Title = styled.h3`
  margin: 0 0 4px;
`

const Subtitle = styled.div`
  color: ${text.light};
`

const ImageSection = styled.div``

const Image = styled.div`
  width: 92px;
  height: 140px;
  background-size: cover;
  background-position: center;
`

const BookshelfItem: React.FC<{
  book: Book
  index: number
  isOpen: boolean
  setOpened: React.Dispatch<React.SetStateAction<number>>
}> = ({ book, index, isOpen, setOpened }) => {
  const { title, authors, description, imageLinks, publishedDate, infoLink } =
    book
  return (
    <Wrapper isOpen={isOpen}>
      <Header isOpen={isOpen} onClick={() => setOpened(index)}>
        <Title>{title}</Title>
        <Subtitle>{authors[0]}</Subtitle>
      </Header>
      {isOpen && (
        <InfoSection>
          <DescriptionSection>
            <Description>
              {description}
              <ExternalLink target="_blank" href={infoLink}>
                <MoreLink> more</MoreLink>
              </ExternalLink>
            </Description>
            <DescriptionInfoLine>
              <Date>{publishedDate}</Date>
            </DescriptionInfoLine>
          </DescriptionSection>
          <ImageSection>
            {imageLinks && imageLinks.smallThumbnail && (
              <Image
                // width={92}
                // src={imageLinks.smallThumbnail}
                style={{ backgroundImage: `url(${imageLinks.smallThumbnail})` }}
              />
            )}
          </ImageSection>
        </InfoSection>
      )}
    </Wrapper>
  )
}

export default BookshelfItem
