
const Menu = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container">
                <a href="#" className='navbar-brand'>TodoApp <i className='fa fa-calendar-check-o'></i>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="#/">Todo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/about">About</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu