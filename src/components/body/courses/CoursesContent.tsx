import React from "react"
import styled from "styled-components"
import { Accordion } from "react-accessible-accordion"
import CourseListItem from "./CourseListItem"
import { CourseItem } from "./CourseTypes"
import { courseData } from "../../../data/courses"
import 'react-accessible-accordion/dist/fancy-example.css'
import { breakpoints } from "../../shared/styles"

const CourseListWrapper = styled(Accordion)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    border: none;
    margin: 0 -2rem;
  }
`

const CoursesContent: React.FC = () => {
  return (
    <>
      <CourseListWrapper allowZeroExpanded preExpanded={['0']}>
        {courseData && courseData.length >= 0 ? (
          courseData.map(
            (course: CourseItem, key: React.Key | null | undefined) => {
              return <CourseListItem key={key} course={course} uuid={`${key}`} />
            }
          )
        ) : (
          <p>Error loading courses.</p>
        )}
      </CourseListWrapper>
    </>
  )
}

export default CoursesContent
