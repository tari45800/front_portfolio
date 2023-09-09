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
import { useRef, useEffect, useState } from "react";

const MainContainer = styled.div``;

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
        <Contact></Contact>
        <Line />
      </MainContainer>
    </>
  );
}

export default Main;
