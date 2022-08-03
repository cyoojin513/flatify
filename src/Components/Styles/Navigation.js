import styled from "styled-components";

const Navigation = styled.li`
  border-radius: 5px;
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 6px 18px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: lightgrey;

  
  &.active, :hover {
    color: white
  }
`

const NavWrapper = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 100%;
  background-color: black;
`

export default Navigation;
export { NavWrapper };