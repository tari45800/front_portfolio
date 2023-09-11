import styled from "styled-components";
import Observer from "../components/Observer";

const HeaderContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;

  padding: 0 5rem;
  height: 8vh;
  border-bottom: 0.08rem solid black;

  @media screen and (max-width: 80rem) {
    height: 4rem;
    padding: 0 3rem;
  }

  @media screen and (max-width: 40rem) {
    gap: 3rem;
  }
`;

const HeaderTitle = styled.div`
  flex: 1;

  @font-face {
    font-family: "SF_HambakSnow";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "SF_HambakSnow";
  font-size: 1.5vw;

  @media screen and (max-width: 80rem) {
    font-size: 1.5rem;
  }
`;

const NavContainer = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-between;
  font-size: 0.9vw;

  div {
    cursor: pointer;
  }

  a {
    color: black;
  }
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Portfolio</HeaderTitle>
        <NavContainer>
          <div>
            <a href="#about">ABOUT</a>
          </div>
          <div>
            <a href="#skills">SKILLS</a>
          </div>
          <div>
            <a href="#experiences">EXPERIENCES</a>
          </div>
          <div>
            <a href="#project">PROJECTS</a>
          </div>
          <div>
            <a href="#contact">CONTACT</a>
          </div>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
