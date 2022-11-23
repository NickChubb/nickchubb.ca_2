import styled from "styled-components"

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 48px 48px 48px 0;
  transition: 0.25s;
`

export const SectionTitle = styled.h2`
  padding: 48px 0;
`

type SectionProps = {
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionWrapper id={title}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  )
}

export default Section
