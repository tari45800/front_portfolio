import styled from "styled-components";

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
`;

const NavContainer = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-between;
  font-size: 0.9vw;

  div {
    cursor: pointer;
  }
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Portfolio</HeaderTitle>
        <NavContainer>
          <div>ABOUT</div>
          <div>SKILLS</div>
          <div>EXPERIENCES</div>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
