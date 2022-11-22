import React from "react"
import styled from "styled-components"
import Section from "../../shared/section"
import { Accordion } from "react-accessible-accordion"
import CourseListItem from "./CourseListItem"
import { CourseItem } from "./CourseTypes"
import { courseData } from "../../../data/courses"

const CourseListWrapper = styled(Accordion)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`

const CoursesSection = () => {
  return (
    <Section title="courses">
      <CourseListWrapper allowZeroExpanded>
        {courseData && courseData.length >= 0 ? (
          courseData.map(
            (course: CourseItem, key: React.Key | null | undefined) => {
              return <CourseListItem key={key} course={course} />
            }
          )
        ) : (
          <p>Error loading courses.</p>
        )}
      </CourseListWrapper>
    </Section>
  )
}

export default CoursesSection
