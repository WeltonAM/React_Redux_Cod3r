import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="main-footer">
            <span>
                Copyright ©
                <strong>
                    <Link to="https://github.com/WeltonAM" target="_black">WeltonMatosDev</Link>
                </strong>
                <span> { new Date().getFullYear() } | </span>
            </span>

            <span>
                | At <strong>
                    <Link to="https://www.cod3r.com.br/" target="_black"> Cod3r</Link>
                </strong>
            </span>

        </footer>
    )
}

export default Footer