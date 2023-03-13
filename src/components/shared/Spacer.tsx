import styled from "styled-components"

const Wrapper = styled.div<SpacerProps>`
  height: ${props => props.height};
`

type SpacerProps = {
  height: string
}

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return (
    <Wrapper height={height} />
  )
}

export default Spacer