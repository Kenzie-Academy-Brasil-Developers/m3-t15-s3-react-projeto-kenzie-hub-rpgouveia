import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'

const Dashboard = ({user, setUser}) => {
    const {name, course_module } = user
    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <Nav logout={logout} />
            <Header name={name} course_module={course_module} />
            <Main />
        </>
    )
}

export default Dashboard