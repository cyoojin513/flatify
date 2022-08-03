import styled from "styled-components";

const Card = styled.div`
  width: 92%;
  max-width: 200px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 10px;
  background-color: rgba(30,30,30);
  box-sizing: inherit;
  text-align: left;
  

  img {
    max-width: 200px;
    height: auto;
    border-radius: 10px 10px 0 0;
  }

  h3, h4, p {
    margin: auto;
    color: white;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export default Card;