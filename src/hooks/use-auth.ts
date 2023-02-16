import { useEffect, useState } from 'react'

const useAuth = () => {
  let token: string | null = ''
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  const [loading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const validateToken = async () => {
      // validate token
      const response = await fetch('/api/admin/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      if (response.status === 200) {
        response.json().then((body) => {
          setAuth(true)
          setUser(body.user)
        })
      }
    }
    if (token === '') return
    if (!token) {
      setLoading(false)
      return
    }
    validateToken().then(() => setLoading(false))
  }, [token])

  return { isAuth, loading, user }
}

export default useAuth
