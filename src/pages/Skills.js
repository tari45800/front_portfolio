import styled from "styled-components";
import Observer from "../components/Observer";
import Button from "../components/Button";

const SkillsContainer = styled.div`
  padding: 5rem;
  margin-top: 10rem;
  display: flex;
`;

const SkillsTitle = styled.div`
  font-size: 5rem;
  flex: 1;
`;

const SkillsContent = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3.2rem;
  flex: 2.5;
`;

function Skills() {
  return (
    <SkillsContainer>
      <SkillsTitle>
        <Observer>Skills</Observer>
      </SkillsTitle>
      <SkillsContent>
        <Observer>
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
          <Button content={"자기소개서 →"} />
        </Observer>
      </SkillsContent>
    </SkillsContainer>
  );
}

export default Skills;
