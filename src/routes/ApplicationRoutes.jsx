import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const ApplicationRoutes = ({loginUser}) => {
    return (
        <Routes>
            <Route path='/' element={ <Login loginUser={loginUser} /> }/>
            <Route path='register' element={ <Register /> }/>
            <Route path='home' element={ <Home /> } />
        </Routes>
    )
}

export default ApplicationRoutes