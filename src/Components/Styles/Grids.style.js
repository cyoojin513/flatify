import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
  background-color: #141311;
`

const MainContentWrapper = styled.main`
  grid-column: 2;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-rows: 1fr;
  gap: 10px;

`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 100px 100px 100px;
`
const AboutGrid = styled.div`
  display: grid;
  margin-top: 100px;
  margin-left: 100px;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: 1fr;
  gap: 10px;

`

export {MainContentWrapper, ContentGrid, FormGrid, AboutGrid}
export default PageWrapper;