import React from 'react'
import { AboutGrid } from './Styles/Grids.style'
import { AboutCard } from './Styles/Cards.style'
import stockavatar from '../Images/stockavatar.jpeg'
import linkedinVH from '../Images/linkedinVH.jpeg'

export default function About() {
  return (
    <div>
        <h1 className='aboutHeader'>About</h1>
        <AboutGrid>
            <AboutCard>
                <h2>Allie Brubaker</h2>
                <img src={stockavatar} alt="React-Dev-1"/>
                <p>
                    <a href="https://www.linkedin.com/in/alie-brubaker/">Linkedin</a>
                </p>
                <p>
                    <a href="https://github.com/AlbertaLynnBrubaker">GitHub</a>
                </p>
            </AboutCard>
            <AboutCard>
                <h2>Victor Haynes</h2>
                <img src={linkedinVH} alt="React-Dev-2"/>
                <p>
                    <a href="https://www.linkedin.com/in/victor-haynes/">Linkedin</a>  
                </p>
                <p>
                    <a href="https://github.com/victorhaynes">GitHub</a>     
                </p>   
            </AboutCard>
            <AboutCard>
                <h2>Yoojin Cheong</h2>
                <img src={stockavatar} alt="React-Dev-3"/>
                <p>
                    <a href="https://www.linkedin.com/in/yoojin-cheong/">Linkedin</a>
                </p>
                <p>
                    <a href="https://github.com/cyoojin513/">GitHub</a>
                </p>
            </AboutCard>
        </AboutGrid>
        <h2 className='aboutPage'>Flatify: a React.js App</h2>
        <h2 className='aboutText'>featuring React Router, Styled Components, and JSON Server</h2>
    </div>
  )
}
