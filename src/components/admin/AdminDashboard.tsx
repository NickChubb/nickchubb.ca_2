import styled from 'styled-components'
import { colour } from '../shared/styles'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background: ${colour.cardBackground};
  padding: 32px 64px;
`

const Title = styled.h1`
  text-align: center;
`

const SpotifySection = styled.div``

type AdminDashboardProps = {
  user: string | null | undefined
}

const AdminDashboard: React.FC<AdminDashboardProps>  = ({ user }) => {
  return (
    <Wrapper>
      <Title>Welcome {user}!</Title>
      <SpotifySection />
    </Wrapper>
  )
}

export default AdminDashboard