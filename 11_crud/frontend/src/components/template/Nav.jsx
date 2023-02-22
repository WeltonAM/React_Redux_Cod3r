import MenuLinks from './MenuLinks'
import './Nav.css'

const Nav = () => {
  return (
    <aside className='menu-area'>
        <nav className="menu">
          
          <MenuLinks
            page="/"
            icon="home"
            content="Home"
          />
          
          <MenuLinks
            page="/users"
            icon="users"
            content="Users"
          />
        
        </nav>
    </aside>
  )
}

export default Nav