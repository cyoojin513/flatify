import React from 'react'
import {NavLink} from 'react-router-dom'
import Navigation, {NavWrapper} from './Styles/Navigation'

function NavBar() {
  return (
    <NavWrapper>
      <NavLink exact to='/'>
        <Navigation>Home</Navigation>
      </NavLink>
      <NavLink exact to='/library'>
        <Navigation>Library</Navigation>
      </NavLink>
      <NavLink exact to='/search'>
        <Navigation>Search</Navigation>
      </NavLink>
      <NavLink exact to='/for-artists'>
        <Navigation>For Artists</Navigation>
      </NavLink>
    </NavWrapper>
  )
}

export default NavBar

