import styled from "styled-components";
import Observer from "../components/Observer";
import Button from "../components/Button";
// import b1 from "../imgs/icons/b-1.png";
// import b2 from "../imgs/icons/b-2.png";
// import b3 from "../imgs/icons/b-3.png";
// import b4 from "../imgs/icons/b-4.png";
// import f2 from "../imgs/icons/f-2.png";
// import f3 from "../imgs/icons/f-3.png";
// import f4 from "../imgs/icons/f-4.png";
// import t2 from "../imgs/icons/t-2.png";
// import t3 from "../imgs/icons/t-3.png";
// import t4 from "../imgs/icons/t-4.png";

const SkillsContainer = styled.div`
  display: flex;
  margin: 8rem 0;
  padding: 5rem;

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .dot {
  }

  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5vw;
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

const SkillsTitle = styled.div`
  flex: 1;
  font-size: 3.5vw;
  font-weight: normal;

  @media screen and (max-width: 80rem) {
    font-size: 3rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const SkillsContentBox = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 7vw;

  @media screen and (max-width: 80rem) {
    gap: 5rem;
  }

  @media screen and (max-width: 36rem) {
    gap: 3rem;
  }
`;

const SkillsContent = styled.div`
  flex: 2.5;
  word-break: break-all;

  .SkillsContentTitle {
    border-left: 0.4vw solid rgb(50, 50, 50);
    height: 2vw;
    font-size: 2vw;
    padding-left: 0.7vw;
    margin-bottom: 2vw;

    @media screen and (max-width: 80rem) {
      font-size: 2rem;
      height: 1.8rem;
      border-left: 0.4rem solid rgb(50, 50, 50);
    }

    @media screen and (max-width: 36rem) {
      border-left: 0.3rem solid rgb(50, 50, 50);
      height: 1.3rem;
      padding-left: 0.5rem;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }

  span {
    background-color: rgb(245, 245, 245);
    padding: 0.3vw 0.8vw;
    border-radius: 0.5vw;
    margin-right: 1vw;

    @media screen and (max-width: 80rem) {
      padding: 0.3rem 0.8rem;
      line-height: 3rem;

      border-radius: 0.5rem;
      margin-right: 1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }
`;

function Skills() {
  return (
    <SkillsContainer>
      <SkillsTitle>
        <Observer>Skills</Observer>
      </SkillsTitle>
      <SkillsContentBox>
        <Observer>
          <SkillsContent>
            <div className="SkillsContentTitle">Languages</div>
            <div>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Java</span>
            </div>
          </SkillsContent>
        </Observer>

        <Observer>
          <SkillsContent>
            <div className="SkillsContentTitle">Frameworks & Libraries</div>
            <div>
              <span>React</span>
              <span>Next.js</span>
              <span>React-Native</span>
              <span>JQuery</span>
              <span>styled-components</span>

              <span>TanstackQuery</span>
              <span>zustand</span>
              <span>msw</span>

              <span>Node.js</span>
              <span>Express</span>
              <span>Nest.js</span>
              <span>JSP</span>
              <span>Firebase</span>

              <span>MySQL</span>
            </div>
          </SkillsContent>
        </Observer>

        <Observer>
          <SkillsContent>
            <div className="SkillsContentTitle">Tools & Platforms</div>
            <div>
              <span>VSCode</span>
              <span>Vite</span>

              <span>Git</span>
              <span>Github</span>

              <span>AWS(EC2)</span>
            </div>
          </SkillsContent>
        </Observer>

        {/* <Button content={"자기소개서 →"} /> */}
      </SkillsContentBox>
    </SkillsContainer>
  );
}

export default Skills;
