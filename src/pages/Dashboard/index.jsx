import React from 'react'
import Logo from '../../components/Logo'
import { useNavigate } from 'react-router-dom'

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
            <nav>
                <Logo />
                <button onClick={() => logout()}>Sair</button>
            </nav>
            <header>
                <h1>Olá, {name}</h1>
                <p>{course_module}</p>
            </header>
            <main>
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </>
    )
}

export default Dashboard