import styled from "styled-components";
import Line from "../components/Line";
import Header from "./Header";
import Introduction from "./Introduction";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import BigTitle from "../components/BigTitle";
import Project from "./Project";
import Contact from "./Contact";
import Project2 from "./Project2";
const MainContainer = styled.div``;
const Portfolio = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 1.5vw;
  font-weight: 100;
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Introduction />
        <Line />
        <About />
        <Line />
        <Skills />
        <Line />
        <Experiences />
        <Line />
        <BigTitle />
        <Line />
        <Project />
        <Line />
        <Project2 />
        <Line />
        <Contact></Contact>
        <Line />
        <Portfolio>Copyright © 2023 TARI All rights reserved</Portfolio>
      </MainContainer>
    </>
  );
}

export default Main;
