import Menu from "./Menu"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a className="brand-link d-flex flex-row align-items-center justify-content-center">
                <span className="brand-text font-weight-light mr-2">Money</span>
                <i className="fa fa-money"></i>
                <span className="brand-text font-weight-light ml-2"> Manager</span>
            </a>

            <div className="sidebar">
                <nav className="mt-4">
                    <Menu />
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar