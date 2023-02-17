import ContentHeader from "./ContentHeader"

const Header = () => {
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand navbar-primary navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" role="button"><i className="fa fa-bars"></i></a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header