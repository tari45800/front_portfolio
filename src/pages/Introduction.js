import styled from "styled-components";
import Observer from "../components/Observer";

const IntroductionContainer = styled.div`
  padding: 5rem;
  height: 82vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .titleLeftLine {
    height: 16vw;
    border-left: 1rem solid black;
    transition: 0.5s;
  }

  .titleContentBox {
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    font-size: 4.5vw;
    line-height: 6vw;
    transition: 0.5s;
  }
`;

const NavContainer = styled.div`
  display: flex;
  font-size: 1.5vw;
  font-weight: lighter;
  line-height: 2vw;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    cursor: pointer;

    height: 3rem;
  }
`;

function Introduction() {
  return (
    <>
      <IntroductionContainer>
        <TitleContainer>
          <div className="titleLeftLine"></div>
          <div className="titleContentBox">
            <div>사람을 위하는</div>
            <div>프론트엔드 개발자</div>
            <div>이제윤입니다.</div>
          </div>
        </TitleContainer>

        <NavContainer>
          {/* <div>ABOUT</div>
          <div>SKILLS</div>
          <div>EXPERIENCES</div>
          <div>PROJECTS</div>
          <div>CONTACT</div> */}
          {/* <div>타이밍은 스피드를 이기고</div>
          <div>정확도는 힘을 이깁니다.</div>
          <div>인생은 실전입니다. </div> */}
        </NavContainer>
      </IntroductionContainer>
    </>
  );
}

export default Introduction;
