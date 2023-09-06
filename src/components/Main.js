import styled from "styled-components";
import Line from "./Line";
import Header from "./Header";
import Introduction from "./Introduction";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import BigTitle from "./BigTitle";
import Project from "./Project";
import Contact from "./Contact";

const MainContainer = styled.div``;

function Main() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Line />
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
        <Contact></Contact>
        <Line />
      </MainContainer>
    </>
  );
}

export default Main;
