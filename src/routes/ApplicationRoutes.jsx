import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const ApplicationRoutes = ({loginUser, registerUser, user, setUser}) => {
    return (
        <Routes>
            <Route path='/' element={ <Login loginUser={loginUser} /> }/>
            <Route path='register' element={ <Register registerUser={registerUser} /> }/>
            <Route path='dashboard' element={ <Dashboard user={user} setUser={setUser} /> } />
        </Routes>
    )
}

export default ApplicationRoutes