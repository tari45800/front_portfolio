import styled from "styled-components";

const ExperiencesContainer = styled.div`
  padding: 5rem;
  margin-top: 10rem;
  display: flex;
`;

const ExperiencesTitle = styled.div`
  font-size: 5rem;
  flex: 1;
`;

const ExperiencesContent = styled.div`
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

function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperiencesTitle>Experiences</ExperiencesTitle>
      <ExperiencesContent>
        <div>CODE STATES </div>
        <div>2022/12 ~ 2023/06</div>
        <br />
        <div>소프트웨어 엔지니어링 부트캠프 프론트엔드 과정입니다.</div>
        <div>JavaScript, React, Redux, Node.js를 핵심적으로 학습했습니다.</div>
        <div>
          패어 프로그레밍, 팀 프로젝트를 통한 협업 경험과 React를 기반으로 한
          프론트엔드 기술 학습을 이루어 내었습니다.
        </div>
        <div>
          특히 JavaScript와 React를 중요하게 생각해, 책을 통해 기초를 다지고
          있습니다.
        </div>
      </ExperiencesContent>
    </ExperiencesContainer>
  );
}

export default Experiences;
