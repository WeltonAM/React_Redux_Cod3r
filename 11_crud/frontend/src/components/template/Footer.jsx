import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <span>Developed by <Link to="https://www.github.com/weltonam" target="_blank">WAMatosDev</Link></span><span> In <i className='fa fa-heart text-danger'></i>
            <strong> Cod<span className="text-danger">3</span>r </strong>
        </span>
    </footer>
  )
}

export default Footer