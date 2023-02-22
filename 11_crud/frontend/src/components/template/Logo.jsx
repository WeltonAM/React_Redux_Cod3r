import './Logo.css'
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <aside className='logo'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
    </aside>
  )
}

export default Logo