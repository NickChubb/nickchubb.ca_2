import React from 'react'

const AdminLogin = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          localStorage.setItem('token', data.token)
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="username" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default AdminLogin
