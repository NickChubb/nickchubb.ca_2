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

const ListItemWapper = styled(AccordionItem)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const ListItemHeading = styled(AccordionItemHeading)`
  transition: 0.25s;
`

const ListItemButton = styled(AccordionItemButton)`
  background-color: rgb(32, 32, 32);
  color: #bbbbbb;
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
  padding: 20px;
  background-color: rgb(24, 24, 24);
`

const CourseListItem: React.FC<{ course: CourseItem }> = ({ course }) => {
  return (
    <ListItemWapper>
      <ListItemHeading>
        <ListItemButton>
          <b>{course.title}</b> <i>-- {course.num}</i>
          {/* <ListItemTitle>
            <b>{course.title}</b> <i>{course.num}</i>
          </ListItemTitle> */}
        </ListItemButton>
      </ListItemHeading>
      <ListItemPanel>
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
