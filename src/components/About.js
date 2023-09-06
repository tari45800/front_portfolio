import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 5rem;
  margin-top: 10rem;
  display: flex;
`;

const AboutTitle = styled.div`
  font-size: 5rem;
  flex: 1;
`;

const AboutContent = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3.2rem;
  flex: 2;
`;

function About() {
  return (
    <>
      <AboutContainer>
        <AboutTitle>ABOUT</AboutTitle>
        <AboutContent>
          <div>안녕하세요 도전하는 개발자 이제윤입니다.</div>
          <div>
            저의 노력이 사람들에게 자그마한 도움이 되고자 하는 개발자입니다.
          </div>
          <div>
            그런목표를 이루기 위해 현재에 안주하지 않고, 주도적으로 발전하고
            있습니다.
          </div>
          <div>
            특히 JavaScript와 React를 중요하게 생각해, 책을 통해 기초를 다지고
            있습니다.
          </div>
          <br />
          <div>
            저의 노력이 사람들에게 자그마한 도움이 되고자 하는 개발자입니다.
          </div>
          <div>
            문제에 맞닥뜨렸을 때, 끝까지 해결을 위해 노력하는 진득함을 가지고
            있습니다.
          </div>
          <div>
            요즘은 최근 프로젝트에서 구현하지 못한 효율적인 컴포넌트 단위의
            개발에 대해 고민하고 배워가고 있습니다.
          </div>
          <br />
          <div>저의 노력이 사람들에게 자그마한 개발자입니다.</div>
          <div>그런목표를 이루기 위해, 주도적으로 발전하고 있습니다.</div>
          <div>
            특히 JavaScript와 React를 중요하게 생각해, 책을 통해 기초를 다지고
            있습니다.
          </div>
        </AboutContent>
      </AboutContainer>
    </>
  );
}

export default About;
