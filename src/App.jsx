import ApplicationRoutes from './routes/ApplicationRoutes'
import { useNavigate } from 'react-router-dom'
import { api } from './services/api.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // States
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Callbacks
  const loginUser = async (formData) => {
    try {
      const response = await api.post('/sessions', formData)
      const token = response.data.token
      const userId = response.data.user.id
      const userData = response.data.user
      setUser(userData)
      localStorage.setItem('@TOKEN', JSON.stringify(token))
      localStorage.setItem('@USERID', JSON.stringify(userId))
      toast.success('Login feito com sucesso')
      navigate('/home')
    } catch (error) {
      console.log(error)
      toast.error('Email ou senha inválido')
    }
  }
  
  return (
    <>
      <ApplicationRoutes loginUser={loginUser} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
