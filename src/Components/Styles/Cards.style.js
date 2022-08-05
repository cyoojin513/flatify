import styled from "styled-components";

const Card = styled.div`
  width: 92%;
  max-width: 200px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #191818;
  box-sizing: inherit;
  text-align: left;
  
  img {
    border-radius: 20px;
    max-width: 170px;
    height: auto;
    padding: 15px;
  }

  div#container {
    padding: 0px 15px 10px;
  }

  h3 {
    margin: auto;
    color: white;
    padding-bottom: 10px;
    font-weight: bold;
  }

  h4 {
    font-size: 80%;
    padding: 2px;
    margin: auto;
    color: #acabac;
  }

  h4.favorite {
    font-size: 1.3em;
    text-align: right;
    margin-top: -10%;
  }

  &:hover {
    background-color: #272828;
  }
`

const AboutCard = styled.div`
  width: 92%;
  height: 325px;
  max-width: 200px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #191818;
  box-sizing: inherit;
  text-align: left;

  h2 {
    text-align: center;
    padding-top: 10px;
  }

  img {
    border-radius: 20px;
    max-width: 170px;
    height: auto;
    padding: 15px;
    margin-bottom: -10px;
  }

  a {
    display: block;
    color: #acabac;
    text-decoration: none;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 5px;
  }
  

  &:hover {
    background-color: #272828;
  }
`

export {AboutCard}
export default Card;
