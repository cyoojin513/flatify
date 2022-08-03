import styled from "styled-components";

const MainContentWrapper = styled.main`
  grid-column: 2;
`

const ContentWrapper = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
`

export {MainContentWrapper}
export default ContentWrapper;