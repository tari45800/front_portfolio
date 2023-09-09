import styled from "styled-components";
import project1 from "../imgs/theRest/project2-1.png";
import project2 from "../imgs/theRest/project2-2.png";
import project3 from "../imgs/theRest/project2-3.png";
import project4 from "../imgs/theRest/project2-4.png";
import Observer from "../components/Observer";
import Button from "../components/Button";

const Project2Container = styled.div`
  display: flex;
  margin-top: 5vw;
  padding: 5rem;
  flex-direction: column;
  gap: 5vw;
`;

const Project2Desc = styled.div`
  flex: 1;
  display: flex;
`;

const Project2Title = styled.div`
  flex: 1;
  font-size: 3.5vw;
`;

const Project2Content = styled.div`
  flex: 2.5;
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5vw;
  font-weight: 100;
  line-height: 2.4vw;

  > div:last-of-type {
    margin-bottom: 1vw;
  }
`;

const ProjectImgBox = styled.div`
  display: flex;
  overflow-y: scroll;
  gap: 5rem;

  img {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    filter: brightness(80%);
    height: 30vw;
    object-fit: cover;
    transition: 0.5s;
  }

  img:hover {
    filter: brightness(97%);
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ProjectImg = styled.div`
  display: flex;
  flex-direction: column;

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5vw;
  font-weight: 400;
  line-height: 2.4vw;

  div:nth-of-type(1) {
    margin-top: 3vw;
  }
  div:nth-of-type(2) {
    font-size: 1vw;
    color: rgb(150, 150, 150);
    font-weight: 400;
  }

  a {
    color: rgb(30, 30, 30);
  }
`;

function Project2() {
  return (
    <>
      <Project2Container>
        <Project2Desc>
          <Project2Title>The Rest</Project2Title>
          <Project2Content>
            <div>나머지 팀 프로젝트와 사이드 프로젝트입니다.</div>
            <div>3번의 팀 프로젝트와 5번의 사이드 프로젝트를 통해,</div>
            <div>
              이제는 자력으로 홈페이지의 기본적인 프론트를 제작할 수 있습니다.
            </div>
            <div className="margin">
              지금은 컴포넌트 재사용, 폴더구조, 상태관리 등, 개발의 효율을
              높이는 방법을 찾아가고 있습니다.
            </div>
            <Button content={"깃허브 바로가기"} />
          </Project2Content>
        </Project2Desc>
        <ProjectImgBox>
          <Observer>
            <ProjectImg>
              <a
                href="https://github.com/codestates-seb/seb43_pre_030"
                target="_blank"
              >
                <img src={project1} alt="project1" />
                <div>[ Stack Overflow ] - 개발자 질의응답 사이트</div>
                <div>#Front-end #Team Project</div>
              </a>
            </ProjectImg>
          </Observer>
          <Observer>
            <ProjectImg>
              <a href="https://github.com/psh8095/TreeEarth" target="_blank">
                <img src={project2} alt="project2" />
                <div>[ TreeEarth ] - 유저가 직접 참여하는 환경보호 사이트</div>
                <div>#back-end #Team Project</div>
              </a>
            </ProjectImg>
          </Observer>
          <Observer>
            <ProjectImg>
              <a href="https://github.com/tari45800/class101" target="_blank">
                <img src={project3} alt="project3" />
                <div>[ CLASS101 ] - 반응형 디자인 연습 프로젝트</div>
                <div>#Front-end #Solo Project</div>
              </a>
            </ProjectImg>
          </Observer>
          <Observer>
            <ProjectImg>
              <a
                href="https://github.com/tari45800/league_of_legends"
                target="_blank"
              >
                <img src={project4} alt="project4" />
                <div>
                  [ League Of Legends ] - JQuery와 JavaScript 연습 프로젝트
                </div>
                <div>#Front-end #Solo Project</div>
              </a>
            </ProjectImg>
          </Observer>
        </ProjectImgBox>
      </Project2Container>
    </>
  );
}

export default Project2;
