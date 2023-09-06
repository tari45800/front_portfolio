import styled from "styled-components";
import Line from "./Line";
import VerticalLine from "./VerticalLine";
import project1 from "../imgs/project1.png";
import project2 from "../imgs/project2.png";
import project3 from "../imgs/project3.png";
import project4 from "../imgs/project4.png";
import project5 from "../imgs/project5.png";
import project6 from "../imgs/project6.png";
import project7 from "../imgs/project7.png";

const ProjectContainer = styled.div`
  height: 80vh;
  display: flex;
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  flex: 1;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  font-size: 3rem;
`;

const ProjectContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectContent = styled.div`
  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "SUIT-Regular";

  display: flex;
  font-size: 1rem;
  gap: 2rem;
  font-weight: 100;
  line-height: 1.5rem;

  :nth-child(1) {
    flex: 1.2;
    color: #b3b3b3;
    max-width: 8rem;
  }
  :nth-child(2) {
    flex: 3;
    max-width: 16rem;
  }
`;

const ProjectImg = styled.div`
  flex: 3.5;
  display: flex;
  overflow: scroll;
  padding: 3rem;
  gap: 3rem;

  img {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    filter: brightness(97%);
    width: 60rem;
    object-fit: cover;
  }
`;

const Button = styled.span`
  margin: 0 auto;
  width: fit-content;
  padding: 1rem;
  font-size: 0.8rem;
  font-weight: normal;
  border: 0.08rem solid #b3b3b3;
  border-radius: 2rem;
`;

function Project() {
  return (
    <>
      <ProjectContainer>
        <ProjectContentContainer>
          <ProjectTitle>The Gong</ProjectTitle>
          <ProjectContentBox>
            <ProjectContent>
              <div>DATE</div>
              <div>2023.05</div>
            </ProjectContent>
            <ProjectContent>
              <div>DESCRIPTION</div>
              <div>
                웹 소켓을 기반으로 다수의 유저를 화상으로 연결하는 온라인 스터디
                사이트
              </div>
            </ProjectContent>
            <ProjectContent>
              <div>SKILLS</div>
              <div>
                react, typescript, styled-components, axios, sockJS, Stomp,
                Kurento
              </div>
            </ProjectContent>
            <Button>프로젝트 상세 →</Button>
          </ProjectContentBox>
        </ProjectContentContainer>
        <VerticalLine />
        <ProjectImg>
          <img src={project1} alt="project1" />
          <img src={project2} alt="project2" />
          <img src={project3} alt="project3" />
          <img src={project4} alt="project4" />
        </ProjectImg>
      </ProjectContainer>

      <Line></Line>

      <ProjectContainer>
        <ProjectContentContainer>
          <ProjectTitle>KREAM</ProjectTitle>
          <ProjectContentBox>
            <ProjectContent>
              <div>DATE</div>
              <div>2023.05</div>
            </ProjectContent>
            <ProjectContent>
              <div>DESCRIPTION</div>
              <div>
                웹 소켓을 기반으로 다수의 유저를 화상으로 연결하는 온라인 스터디
                사이트
              </div>
            </ProjectContent>
            <ProjectContent>
              <div>SKILLS</div>
              <div>
                react, typescript, styled-components, axios, sockJS, Stomp,
                Kurento
              </div>
            </ProjectContent>
            <Button>프로젝트 상세 →</Button>
          </ProjectContentBox>
        </ProjectContentContainer>
        <VerticalLine />
        <ProjectImg>
          <img src={project5} alt="project5" />
          <img src={project6} alt="project6" />
          <img src={project7} alt="project7" />
        </ProjectImg>
      </ProjectContainer>
    </>
  );
}

export default Project;
