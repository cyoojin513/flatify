import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navigation, NavWrapper} from './Styles/Navigation.style'
import {RiSpotifyFill} from 'react-icons/ri'
import {MdHome, MdOutlineHome} from 'react-icons/md'

function NavBar() {
  return (
    <NavWrapper>
      <div className='logo'>
        <RiSpotifyFill color='white'/>
      </div>
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

