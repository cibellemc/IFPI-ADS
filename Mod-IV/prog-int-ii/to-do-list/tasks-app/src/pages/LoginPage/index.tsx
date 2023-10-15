import React, { useRef } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import './LoginPage.css';

interface LoginPagePros {
  next?: string
}

export function LoginPage({ next = '/' }: LoginPagePros) {

  const { signin, isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={next} />
  }

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = usernameInputRef.current!.value
    const password = passwordInputRef.current!.value

    if (username !== 'cibel' || password !== '1234') {
      alert('Usuário e/ou senha incorretos!')
    }

    signin({ username })
  }

  return (
    <main>
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleLoginSubmit}>
      <div className="input-container">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="username" ref={usernameInputRef} />
        </div>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="senha" ref={passwordInputRef} />
        </div>
        <input type="submit" value="Entrar" />
      </form>
    </main>
  )
}