import styled from "styled-components";

const Navigation = styled.li`
  border-radius: 5px;
  font-size: 18px;
  font-weight: 800;
  padding: 6px 25px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: #adadad;
  transition: 0.3s;
  
  &.active, :hover {
    color: white
  }

  svg {
    width: 28px;
    height: auto;
    transform: translate(0, 7px)
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
  grid-template-rows: 120px repeat(4, 50px);

  a {
    text-decoration: none;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;

  img {
    width: 140px;
    height: auto;
    margin: 0;
  }
`

export { Navigation, NavWrapper, Logo };