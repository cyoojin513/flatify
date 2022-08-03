import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  background-color: #141311;
`

const MainContentWrapper = styled.main`
  grid-column: 2;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`

export {MainContentWrapper, ContentGrid}
export default PageWrapper;