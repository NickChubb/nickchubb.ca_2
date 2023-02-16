import styled from "styled-components"
import AdminDashboard from "../../src/components/admin/AdminDashboard"
import AdminLogin from "../../src/components/admin/AdminLogin"
import useAuth from "../../src/hooks/use-auth"

const AdminPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const index = () => {
  const { isAuth, loading, user } = useAuth()

  const getAdminDashboard = () => {
    if (loading) return <div>loading...</div> // If the page is still loading, show loading message
    if (!isAuth) return <AdminLogin /> // If the user is not logged in, show login page
    return <AdminDashboard user={user} /> // If the user is logged in, show admin dashboard
  }

  return (
    <AdminPageWrapper>
      {getAdminDashboard()}
    </AdminPageWrapper>
  )
}

export default index
