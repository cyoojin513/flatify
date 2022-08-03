import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navigation, NavWrapper} from './Styles/Navigation.style'
import {RiSpotifyFill} from 'react-icons/ri'
import {MdHome, MdOutlineHome} from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import {HiMusicNote, HiOutlineMusicNote} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'

function NavBar() {
  return (
    <NavWrapper>
      <div className='logo'>
        <RiSpotifyFill color='white'/>
      </div>
        <Navigation as={NavLink} exact to='/'>
          <MdHome/>Home
        </Navigation>
        <Navigation as={NavLink} exact to='/library'>
          <BiLibrary/>Library
        </Navigation>
        <Navigation as={NavLink} exact to='/search'>
          <RiSearchLine/>Search
        </Navigation>
        <Navigation as={NavLink} exact to='/for-artists'>
          <HiMusicNote/>For Artists
        </Navigation>
    </NavWrapper>
  )
}

export default NavBar

