import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
`;

const HeaderTitle = styled.div`
  @font-face {
    font-family: "SF_HambakSnow";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "SF_HambakSnow";
  font-size: 2rem;
  flex: 1;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 6;

  div {
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Portfolio</HeaderTitle>
      <NavContainer>
        <div>ABOUT</div>
        <div className="">ABOUT</div>
        <div>SKILLS</div>
        <div>EXPERIENCES</div>
        <div>PROJECTS</div>
        <div>CONTACT</div>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
