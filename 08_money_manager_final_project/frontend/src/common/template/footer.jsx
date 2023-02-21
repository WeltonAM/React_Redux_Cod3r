import React from 'react'

export default props => (
    <footer className="main-footer">
        <span>
            Copyright ©
            <strong>
                <a href="https://github.com/WeltonAM" target="_black">WeltonMatosDev</a>
            </strong>
            <span> {new Date().getFullYear()} | </span>
        </span>

        <span>
            | At <strong>
                <a href="https://www.cod3r.com.br/" target="_black"> Cod3r</a>
            </strong>
        </span>

    </footer>
)