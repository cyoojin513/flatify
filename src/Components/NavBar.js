import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/library'>
        Library
      </NavLink>
      <NavLink exact to='/search'>
        Search
      </NavLink>
      <NavLink exact to='/for-artists'>
        For Artists
      </NavLink>
    </div>
  )
}

export default NavBar