import React from 'react'
import {NavLink} from 'react-router-dom'
import Navigation, {NavWrapper} from './Styles/Navigation'

function NavBar() {
  return (
    <NavWrapper>
      <Navigation as={NavLink} exact to='/'>
        Home
      </Navigation>
      <Navigation as={NavLink} exact to='/library'>
        Library
      </Navigation>
      <Navigation as={NavLink} exact to='/search'>
        Search
      </Navigation>
      <Navigation as={NavLink} exact to='/for-artists'>
        For Artists
      </Navigation>
    </NavWrapper>
  )
}

export default NavBar

