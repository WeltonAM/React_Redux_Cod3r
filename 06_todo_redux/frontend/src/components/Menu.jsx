import React from 'react'

const Menu = () => {
  return (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a href="#" className='navbar-brand'>
                    <i className='fa fa-calendar-check-o'></i>
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/todos">Tasks</a></li>
                    <li><a href="#/about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu