import React from 'react'

const Menu = () => {
    return (
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <li className="nav-item menu-open">
                <a className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Starter Pages
                        <i className="right fa fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <a className="nav-link active">
                            <p>Active Page</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <p>Inactive Page</p>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Menu