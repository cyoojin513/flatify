import styled from "styled-components";

const Card = styled.div`
  width: 92%;
  max-width: 200px;
  /* box-shadow: 0 4px 8px 0 rgb(0 0 0 / 50%); */
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
    /* font-weight: lighter; */
    margin: auto;
    color: #acabac;
  }

  h4.favorite {
    font-size: 1.3em;
    text-align: right;
    margin-top: -10%;
  }

  &:hover {
    /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); */
    background-color: #272828;
  }
`
export default Card;
