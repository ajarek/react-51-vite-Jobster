import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import { useState, createContext } from 'react'
export const AppContext = createContext()

function App() {
  const [email, setEmail] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider value={{email, setEmail }}>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />
      </Routes>
      </AppContext.Provider>
    </div>
  )
 
}

export default App
