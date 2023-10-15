import { useMemo } from 'react'
import './App.css'
import { useAuth } from './contexts/AuthContext'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFound'
import { TasksPage } from './pages/TasksPage'

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { TaskPage } from './pages/TaskPage'

function App() {
  const { signout, isAuthenticated, user } = useAuth()

  const authBlock = useMemo(() => {
    return (
      isAuthenticated ?
        <p>{user!.username}
          <button style={{marginLeft: '8px'}}onClick={() => { signout() }}>Sair</button>
        </p>
        : <p>Olá Visitante!</p>)
  }, [isAuthenticated])

  return (
    <div>
      <BrowserRouter>
        <header style={{maxHeight: "50px", width: "100%"}}>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/tasks">Tasks</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </nav>
          <span style={{width: "100%"}}>
            {authBlock}
          </span>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/tasks'>
            <Route index element={<ProtectedRoute> <TasksPage /> </ProtectedRoute>} />
            <Route path=':id' element={<ProtectedRoute> <TaskPage /> </ProtectedRoute>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        <footer style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#1a1a1a', // Cor de fundo para o footer
          color: 'white',
          padding: '10px',
          textAlign: 'center',
        }}>
          <p>Nunca mais esqueça seus afazeres</p>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
