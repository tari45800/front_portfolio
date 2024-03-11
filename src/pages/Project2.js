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

  @media screen and (max-width: 36rem) {
    padding: 2rem;
    gap: 3rem;
  }
`;

const Project2Desc = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 80rem) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const Project2Title = styled.div`
  flex: 1;
  font-size: 3.5vw;
  @media screen and (max-width: 80rem) {
    font-size: 3rem;
  }
  @media screen and (max-width: 36rem) {
    font-size: 2rem;
    font-weight: bold;
  }
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

  @media screen and (max-width: 80rem) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 0.9rem;
    line-height: 1.5rem;
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

  @media screen and (max-width: 80rem) {
    padding: 0 2rem;
    img {
      height: 10rem;
    }
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
            {/* <div>
              프론트엔드와 백엔드 두 가지 영역에서 프로젝트를 진행했습니다.{" "}
            </div>
            <div>
              두 과정 모두 저마다의 매력있었고, 도움을 주며 프로젝트를
              완성했으며, 우수하게 수료했습니다.
            </div>
            <div className="margin">
              그러나 역시 사용자와 더 가깝고, 제가 목표로 하는 것에 적합한 일은
              프론트였습니다.
            </div>
            <div>그런 이유로 지금은 프론트 개발자로서 성장하고 있습니다.</div> */}
            <Button
              content={"깃허브 바로가기"}
              link={
                "https://github.com/tari45800?tab=overview&from=2023-09-01&to=2023-09-09"
              }
            />
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
