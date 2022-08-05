import React from 'react'
import { AboutGrid } from './Styles/Grids.style'
import { AboutCard } from './Styles/Card.style'
import stockavatar from '../stockavatar.jpeg'

export default function About() {
  return (
    <div>
        <h1 className='aboutHeader'>About</h1>
        <AboutGrid>
            <AboutCard>
                <h2>Allie Brubaker</h2>
                <img src={stockavatar} alt="React-Dev-1"/>
                <a href="https://www.linkedin.com/in/alie-brubaker/">Linkedin</a>
                <a href="https://github.com/victorhaynes">GitHub</a> 
            </AboutCard>
            <AboutCard>
                <h2>Victor Haynes</h2>
                <img src={stockavatar} alt="React-Dev-2"/>
                <a href="https://www.linkedin.com/in/victor-haynes/">Linkedin</a>  
                <a href="https://github.com/victorhaynes">GitHub</a>        
            </AboutCard>
            <AboutCard>
                <h2>Yoojin Cheong</h2>
                <img src={stockavatar} alt="React-Dev-3"/>
                <a href="https://www.linkedin.com/in/yoojin-cheong/">Linkedin</a>
                <a href="https://github.com/victorhaynes">GitHub</a>
            </AboutCard>
        </AboutGrid>
        <h2 className='aboutPage'>A React.js App</h2>
        <h2 className='aboutText'>featuring React Router, Styled Components, and JSON Server</h2>
    </div>
  )
}
