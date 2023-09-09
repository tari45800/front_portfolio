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
`;

const SkillsTitle = styled.div`
  flex: 1;
  font-size: 3.5vw;
`;

const SkillsContentBox = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 7vw;
`;

const SkillsContent = styled.div`
  flex: 2.5;
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5vw;
  font-weight: 100;
  line-height: 2.4vw;

  .SkillsContentTitle {
    border-left: 0.4vw solid rgb(50, 50, 50);
    height: 2vw;
    font-size: 2vw;
    padding-left: 0.7vw;
    margin-bottom: 2vw;
  }

  span {
    background-color: rgb(245, 245, 245);
    padding: 0.3vw 0.8vw;
    border-radius: 0.5vw;
    margin-right: 1vw;
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
            <div className="SkillsContentTitle">Front-End</div>
            <div>
              <span>JavaScript</span>
              <span>React</span>
              <span>Redux</span>
              <span>TypeScript</span>
              <span>styled-components</span>
            </div>
          </SkillsContent>
        </Observer>

        <Observer>
          <SkillsContent>
            <div className="SkillsContentTitle">Back-End</div>
            <div>
              <span>Node.js</span>
              <span>AWS(EC2)</span>
              <span>MySQL</span>
              <span>OracleDB</span>
            </div>
          </SkillsContent>
        </Observer>

        <Observer>
          <SkillsContent>
            <div className="SkillsContentTitle">Tools</div>
            <div>
              <span>VSCode</span>
              <span>Eclipse</span>
              <span>Git</span>
              <span>Github</span>
              <span>Figma</span>
            </div>
          </SkillsContent>
        </Observer>

        {/* <Button content={"자기소개서 →"} /> */}
      </SkillsContentBox>
    </SkillsContainer>
  );
}

export default Skills;
