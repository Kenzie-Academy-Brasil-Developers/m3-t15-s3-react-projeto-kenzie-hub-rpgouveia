import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Login /> }/>
            <Route path='register' element={ <Register /> }/>
            <Route path='home' element={ <Home /> } />
        </Routes>
    )
}

export default ApplicationRoutes