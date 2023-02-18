import React from 'react'
import styled from 'styled-components'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { CourseItem } from './CourseTypes'
import { GoLinkExternal } from 'react-icons/go'
import { ExternalLink } from '../../shared/link'
import { colour, shadow, text } from '../../shared/styles'

const ListItemWapper = styled(AccordionItem)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const ListItemHeading = styled(AccordionItemHeading)`
  transition: 0.25s;
`

const ListItemButton = styled(AccordionItemButton)`
  background-color: ${colour.cardHeader};
  color: ${text.normal};
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  transition: 0.25s;

  &:hover {
    background-color: rgb(38, 38, 38);
  }

  &:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  &[aria-expanded='true']::before,
  &[aria-selected='true']::before {
    transform: rotate(45deg);
  }
`

const ListItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ListItemPanel = styled(AccordionItemPanel)`
  padding: 24px;
  background-color: ${colour.cardBackground};
  text-align: justify;
  color: ${text.light};
  box-shadow: 2px 2px 5px ${shadow.inset} inset;

  animation: fadein 0.35s ease-in;
`

const CourseListItem: React.FC<{ course: CourseItem, uuid: string }> = ({ course, uuid }) => {
  return (
    <ListItemWapper uuid={uuid}>
      <ListItemHeading>
        <ListItemButton>
          <b>{course.title}</b>
          {/* <ListItemTitle>
            <b>{course.title}</b> <i>{course.num}</i>
          </ListItemTitle> */}
        </ListItemButton>
      </ListItemHeading>
      <ListItemPanel>
        <i>({course.num})</i>
        <p>
          {course.description}{' '}
          <ExternalLink href={course.link}>
            <GoLinkExternal />
          </ExternalLink>
        </p>
      </ListItemPanel>
    </ListItemWapper>
  )
}

export default CourseListItem
