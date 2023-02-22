import { Link } from "react-router-dom"

const MenuLinks = ({ page, icon, content}) => {
    return (
        <Link to={`${page}`}>
            <i className={`fa fa-${icon}`}></i> {content}
        </Link>
    )
}

export default MenuLinks