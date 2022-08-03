import styled from "styled-components";

const Navigation = styled.li`
  border-radius: 5px;
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 6px 18px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: #adadad;

  
  &.active, :hover {
    color: white
  }
`

const NavWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 100%;
  background-color: black;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 100px repeat(4, 60px);

  .logo svg {
    width: 50px;
    height: auto;
    color: white;
  }

  a {
    text-decoration: none;
  }
`

export { Navigation };
export { NavWrapper };