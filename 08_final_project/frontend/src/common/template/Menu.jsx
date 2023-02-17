import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul 
            className="nav nav-pills nav-sidebar flex-column" 
            data-widget="treeview" 
            role="menu"
            style={{cursor: "pointer"}}
        >
            <li className="nav-item">
                <Link className="nav-link">
                    <i className="nav-icon fa fa-edit"></i>
                    <p>
                        Register
                        <i className="right fa fa-angle-left"></i>
                    </p>
                </Link>

                <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <Link to="/billingCycles" className="nav-link">
                            <i className="nav-icon fa fa-usd"></i>
                            <p>Payment cycles</p>
                        </Link>
                    </li>
                </ul>
            </li>

            {/* <li className="nav-item">
                <Link className="nav-link">
                    <i className="nav-icon fa fa-usd"></i>
                    <p>Active Page</p>
                </Link>
            </li> */}
        </ul>
    )
}

export default Menu