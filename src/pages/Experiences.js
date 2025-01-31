import styled from "styled-components";
import Observer from "../components/Observer";
import Button from "../components/Button";

const ExperiencesContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  padding: 5rem;

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.4vw;
  font-weight: 100;
  line-height: 2.4vw;

  @media screen and (max-width: 80rem) {
    flex-direction: column;
    gap: 2.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 2rem;
  }
`;

const ExperiencesTitle = styled.div`
  flex: 1;
  font-size: 3.5vw;
  font-weight: normal;
  margin-top: 0.2rem;

  @media screen and (max-width: 80rem) {
    font-size: 3rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ExperiencesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vw;
  flex: 2.5;
  @media screen and (max-width: 36rem) {
    gap: 3rem;
  }
`;

const ExperiencesContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  @media screen and (max-width: 36rem) {
    gap: 1rem;
  }
`;

const ExperiencesContentTitle = styled.div`
  /* font-weight: normal; */
  line-height: 1.5vw;
  border-left: 0.4vw solid rgb(50, 50, 50);
  height: 2.5vw;
  padding-left: 0.7vw;
  .period {
    font-size: 0.8vw;
    font-weight: lighter;
  }

  @media screen and (max-width: 80rem) {
    line-height: 1.2rem;
    height: 2rem;
    border-left: 0.3rem solid rgb(50, 50, 50);
    padding-left: 0.7rem;

    .period {
      font-size: 0.5rem;
    }
  }
`;

const ExperiencesContent = styled.div`
  @media screen and (max-width: 36rem) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

function Experiences() {
  return (
    <ExperiencesContainer>
      <ExperiencesTitle>
        <Observer>Experiences</Observer>
      </ExperiencesTitle>
      <ExperiencesContentContainer>
        <Observer>
          <ExperiencesContentBox>
            <ExperiencesContentTitle>
              <div>EverydayMath </div>
              <div className="period">2023/10 ~ 2024/02 </div>
            </ExperiencesContentTitle>
            <ExperiencesContent>
              <div>에듀태크 회사며 웹 개발자 인턴으로 있었습니다.</div>
              <div>
                자사의 강의 사이트를 유지보수 및 ui와 프로세스를 개선했고,
              </div>
              <div>또한 강의 사이트를 리뉴얼하기 위한 설계를 담당했습니다.</div>
              <div>수강신청을 위한 오프라인 학원 사이트를 만들었습니다.</div>
            </ExperiencesContent>
          </ExperiencesContentBox>
        </Observer>

        <Observer>
          <ExperiencesContentBox>
            <ExperiencesContentTitle>
              <div>CODE STATES </div>
              <div className="period">2022/12 ~ 2023/06</div>
            </ExperiencesContentTitle>
            <ExperiencesContent>
              <div>소프트웨어 엔지니어링 부트캠프 프론트엔드 과정입니다.</div>
              <div>JavaScript, React, Node.js를 핵심적으로 사용했습니다.</div>
              <div>
                패어 프로그레밍, 팀 프로젝트를 통한 협업 경험과 React를 기반으로
              </div>
              <div>
                실습 과제를 통해 SPA, 비동기, RESTAPI, SEO, 상태관리 등 전반적인
                프론트엔드 기술을 학습했습니다.
              </div>
            </ExperiencesContent>
          </ExperiencesContentBox>
        </Observer>

        <Observer>
          <ExperiencesContentBox>
            <ExperiencesContentTitle>
              <div>ITWILL </div>
              <div className="period">2022/3 ~ 2023/09</div>
            </ExperiencesContentTitle>
            <ExperiencesContent>
              <div>클라우드 기반 자바 네트워크 정보 시스템 과정입니다.</div>
              <div>
                Java, Spring, JSP, MySQL, OracleDB를 핵심적으로 사용했습니다.
              </div>
              <div>팀 프로젝트를 통한 협업 경험과 JSP와 Java를 기반으로</div>
              <div>
                서버 구축 및 데이터베이스 관리를 포함한 전반적인 백엔드 기술을
                학습했습니다.
              </div>
            </ExperiencesContent>
          </ExperiencesContentBox>
        </Observer>

        <Observer>
          <Button
            content="학습 블로그 바로가기"
            link={"https://tari45800.tistory.com/category/CODE%20STATES"}
          ></Button>
        </Observer>
      </ExperiencesContentContainer>
    </ExperiencesContainer>
  );
}

export default Experiences;
