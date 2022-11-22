import styled from "styled-components"

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 48px;
  background: green;
`

export const SectionTitle = styled.h2``

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
