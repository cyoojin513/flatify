import React from 'react'
import { AboutGrid } from './Styles/Grids.style'
import { AboutCard } from './Styles/Cards.style'
import linkedinVH from '../Images/linkedinVH.jpeg'
import linkedinYC from '../Images/linkedinYC.jpg'
import Alie from '../Images/Alie.jpg'

export default function About() {
  return (
    <div className='aboutHeader'>
        <h1>About</h1>
        <div className='headerGrid'>
            <AboutGrid>
                <AboutCard>
                    <h2>Alie Brubaker</h2>
                    <img src={Alie} alt="React-Dev-1"/>
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
                    <img src={linkedinYC} alt="React-Dev-3"/>
                    <p>
                        <a href="https://www.linkedin.com/in/yoojin-cheong/">Linkedin</a>
                    </p>
                    <p>
                        <a href="https://github.com/cyoojin513/">GitHub</a>
                    </p>
                </AboutCard>
            </AboutGrid>
        </div>
        <h2 className='aboutPage'>Flatify: a React.js App</h2>
        <h2 >featuring React Router, Styled Components, and JSON Server</h2>
    </div>
  )
}
