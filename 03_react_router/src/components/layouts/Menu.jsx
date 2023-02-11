import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <aside className='menu'>

      <Link to='/' >Home</Link>
      
      <Link to='/param/1' >Param #01</Link>

      <Link to='/param/1agd2c397asd9762' >Param #02</Link>
      
      <Link to='/about' >About</Link>
      
      <Link to='/notfount' >Not Found</Link>


    </aside>
  )
}

export default Menu