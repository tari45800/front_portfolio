import styled from "styled-components";

const IntroductionContainer = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

  font-family: "Noto Sans KR", sans-serif;
  /* font-weight: 600;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  line-height: 4rem; */
  padding: 5rem;

  font-weight: 500;
  font-size: 6rem;
  letter-spacing: 0rem;
  line-height: 8rem;
`;

const NavContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  font-size: 3rem;
  font-weight: lighter;

  div {
    flex: 1;
    /* display: flex;
    justify-content: center; */
    cursor: pointer;
  }
`;

function Introduction() {
  return (
    <>
      <IntroductionContainer>
        <div>도전하는 -</div>
        <div>프론트 개발자</div>
        <div>이제윤입니다.</div>

        <NavContainer>
          <div>ABOUT</div>
          <div className="">ABOUT</div>
          <div>SKILLS</div>
          <div>EXPERIENCES</div>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </NavContainer>
      </IntroductionContainer>
    </>
  );
}

export default Introduction;
