import styled from "styled-components";
import Observer from "../components/Observer";

const IntroductionContainer = styled.div`
  padding: 5rem;
  height: 82vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: 36rem) {
    padding: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5vw;

  .titleLeftLine {
    height: 16vw;
    border-left: 0.8vw solid black;
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

  @media screen and (max-width: 36rem) {
    gap: 1rem;

    .titleLeftLine {
      height: 8rem;
      border-left: 0.5rem solid black;
    }

    .titleContentBox {
      font-size: 2rem;
      line-height: 3rem;
    }
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
          <Observer delay={1}>
            <div className="titleLeftLine"></div>{" "}
          </Observer>
          <Observer delay={1}>
            <div className="titleContentBox">
              <div>'왜'라는 질문으로</div>
              <div>성장하는 개발자</div>
              <div>이제윤입니다.</div>
            </div>
          </Observer>
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
