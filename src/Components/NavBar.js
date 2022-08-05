import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navigation, NavWrapper, Logo} from './Styles/Navigation.style'
import {MdHome} from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import {HiMusicNote} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'
import {AiOutlineTeam} from 'react-icons/ai'
import FlatifyLogo from '../Images/FlatifyLogo.png'

function NavBar() {
  return (
    <NavWrapper>
      <Logo as={NavLink} exact to='/'>
        <img src={FlatifyLogo} alt='logo'/>
      </Logo>
        <Navigation as={NavLink} exact to='/'>
          <MdHome/> Home
        </Navigation>
        <Navigation as={NavLink} exact to='/library'>
          <BiLibrary/> Library
        </Navigation>
        <Navigation as={NavLink} exact to='/search'>
          <RiSearchLine/> Search
        </Navigation>
        <Navigation as={NavLink} exact to='/for-artists'>
          <HiMusicNote/> For Artists
        </Navigation>
        <Navigation as={NavLink} exact to='about'>
          <AiOutlineTeam/> About
        </Navigation>
    </NavWrapper>
  )
}

export default NavBar

