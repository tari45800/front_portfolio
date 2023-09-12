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
  transition: 1s;

  @media screen and (max-width: 36rem) {
    font-size: 0.5rem;
  }
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Introduction />
        <div id="about">
          <Line />
        </div>
        <About />
        <div id="skills">
          <Line />
        </div>
        <Skills />
        <div id="experiences">
          <Line />
        </div>
        <Experiences />
        <div id="project">
          <Line />
        </div>
        <BigTitle />
        <Line />
        <Project />
        <Line />
        <Project2 />
        <div id="contact">
          <Line />
        </div>
        <Contact />
        <Line />
        <Portfolio>Copyright © 2023 TARI All rights reserved</Portfolio>
      </MainContainer>
    </>
  );
}

export default Main;
