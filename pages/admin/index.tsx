
import AdminDashboard from "../../src/components/admin/AdminDashboard"
import AdminLogin from "../../src/components/admin/AdminLogin"
import useAuth from "../../src/hooks/use-auth"

const index = () => {
  const { isAuth, loading } = useAuth()
  if (loading) return <div>loading...</div> // If the page is still loading, show loading message
  if (!isAuth) return <AdminLogin /> // If the user is not logged in, show login page
  return <AdminDashboard />
}

export default index
