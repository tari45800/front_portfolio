import styled from "styled-components";
import Line from "../components/Line";
import Observer from "../components/Observer";
import Button from "../components/Button";
import VerticalLine from "../components/VerticalLine";
import project1 from "../imgs/project1.png";
import project2 from "../imgs/project2.png";
import project3 from "../imgs/project3.png";
import project4 from "../imgs/project4.png";
import s1 from "../imgs/s1.png";
import s2 from "../imgs/s2.png";
import s3 from "../imgs/s3.png";
import s4 from "../imgs/s4.png";
import e1 from "../imgs/e1.png";
import e2 from "../imgs/e2.png";
import e3 from "../imgs/e3.png";
import e4 from "../imgs/e4.png";

const ProjectContainer = styled.div`
  display: flex;
  @media screen and (max-width: 80rem) {
    flex-direction: column;
  }
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  flex: 1;
  justify-content: space-between;

  @media screen and (max-width: 36rem) {
    padding: 2rem;
  }
`;

const ProjectTitle = styled.div`
  font-size: 2.5vw;

  a {
    color: black;
  }
  @media screen and (max-width: 80rem) {
    font-size: 3vw;
  }

  @media screen and (max-width: 36rem) {
    line-height: 1.2rem;
    height: 1rem;
    border-left: 0.2rem solid rgb(50, 50, 50);
    padding-left: 0.4rem;
  }
`;

const ProjectContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  @media screen and (max-width: 80rem) {
    display: none;
  }
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
  font-size: 0.8vw;
  gap: 1.5vw;
  font-weight: 100;
  line-height: 1.2vw;

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
  padding: 3rem 5rem;
  gap: 3rem;

  img {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    filter: brightness(97%);
    height: 30vw;
    object-fit: cover;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 36rem) {
    padding: 0 2rem;
    img {
      height: 10rem;
    }
  }
`;

function Project() {
  return (
    <>
      <ProjectContainer>
        <ProjectContentContainer>
          <Observer>
            <ProjectTitle>
              <a href="https://study-app-eight.vercel.app/" target="_blank">
                타이머 사이트
              </a>
            </ProjectTitle>
          </Observer>

          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2024.08</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>공부 타이머 사이트</div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>react, typescript, TanstackQuery, zustand, msw, vite</div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://tarispersonalspace.notion.site/7f889ca6bb374dd1add2709a35099e0a?pvs=74`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <div>
          <VerticalLine />
        </div>
        <ProjectImg>
          <Observer>
            <img src={e1} alt="project1" />{" "}
          </Observer>
          <Observer>
            <img src={e2} alt="project2" />{" "}
          </Observer>
          <Observer>
            <img src={e3} alt="project3" />{" "}
          </Observer>
          <Observer>
            <img src={e4} alt="project3" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer>

      <Line />

      <ProjectContainer>
        <ProjectContentContainer>
          <Observer>
            <ProjectTitle>
              <a href="https://www.sseduacademy.com/" target="_blank">
                SSEDU ACADEMY
              </a>
            </ProjectTitle>
          </Observer>

          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2023.11</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>수업을 접수할 수 있는 학원 홈페이지</div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>
                  next.js, axios, recoil, typescript, styled-components,
                  react-hook-form
                </div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://tarispersonalspace.notion.site/SSEDU-ACADEMY-7294f2248f8649f695df6a0dfaead77a?pvs=74`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <div>
          <VerticalLine />
        </div>
        <ProjectImg>
          <Observer>
            <img src={s1} alt="project1" />{" "}
          </Observer>
          <Observer>
            <img src={s2} alt="project2" />{" "}
          </Observer>
          <Observer>
            <img src={s3} alt="project3" />{" "}
          </Observer>
          <Observer>
            <img src={s4} alt="project4" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer>

      <Line />

      <ProjectContainer>
        <ProjectContentContainer>
          <Observer>
            <ProjectTitle>
              <a
                href="https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4#40879cae560744cfb328748dc40c457a"
                target="_blank"
              >
                The Gong
              </a>
            </ProjectTitle>
          </Observer>

          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2023.05</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>
                  웹 소켓을 기반으로 다수의 유저를 화상으로 연결하는 온라인
                  스터디 사이트
                </div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>
                  react, typescript, axios, styled-components, sockJS, Stomp,
                  Kurento
                </div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://tarispersonalspace.notion.site/THE-GONG-4d42ae3ed3854683a7196c2e7d639668?pvs=74`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <div>
          <VerticalLine />
        </div>
        <ProjectImg>
          <Observer>
            <img src={project1} alt="project1" />{" "}
          </Observer>
          <Observer>
            <img src={project2} alt="project2" />{" "}
          </Observer>
          <Observer>
            <img src={project3} alt="project3" />{" "}
          </Observer>
          <Observer>
            <img src={project4} alt="project4" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer>

      <Line />

      {/* <ProjectContainer>
        <ProjectContentContainer>
          <Observer>
            <ProjectTitle>
              <a
                href="https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4#bd82bc285e5c4d73a22e4bee508a46a4"
                target="_blank"
              >
                Portfolio
              </a>
            </ProjectTitle>
          </Observer>

          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2023.09</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>
                  flex와 스크롤 이벤트 애니메이션을 활용한 반응형 포트폴리오
                </div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>react, styled-components</div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4#bd82bc285e5c4d73a22e4bee508a46a4`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <div>
          <VerticalLine />
        </div>
        <ProjectImg>
          <Observer>
            <img src={project8} alt="project8" />{" "}
          </Observer>
          <Observer>
            <img src={project9} alt="project9" />{" "}
          </Observer>
          <Observer>
            <img src={project10} alt="project10" />{" "}
          </Observer>
          <Observer>
            <img src={project11} alt="project11" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer> */}
    </>
  );
}

export default Project;
