import React, { useState } from 'react'
import { api } from '../../services/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Loading from './Loading'

const Dashboard = () => {
    const userId = JSON.parse(localStorage.getItem('@USERID'))
    const [loggedUser, setLoggedUser] = useState(null)
    const navigate = useNavigate()
        
    useEffect(() => {
        async function getLoggedUser() {
            const response = await api.get(`/users/${userId}`)
            setLoggedUser(response.data)
        }
        getLoggedUser()
    }, [])
    
    const logout = () => {
        setLoggedUser(null)
        localStorage.clear()
        navigate('/')
    }

    if (loggedUser) {
        return (
            <>
                <Nav logout={logout} />
                <Header name={loggedUser.name} course_module={loggedUser.course_module} />
                <Main />
            </>
        )
    } else {
        return (
            <>
                <Nav />
                <Loading />
            </>
        )
    }
}

export default Dashboard