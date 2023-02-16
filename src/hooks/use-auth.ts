import { useEffect, useState } from "react"

 const useAuth = () => {
  let token: string | null = ''
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  const [loading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    const validateToken = async () => {
      // validate token
      const { status } = await fetch('/api/admin/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      if (status === 200) setAuth(true)
    }
    if (token === '') return
    if (!token) {
      setLoading(false)
      return
    }
    validateToken().then(() => setLoading(false))
  }, [token])

  return { isAuth, loading }
}

export default useAuth