import styled from "styled-components";

const BigTitleContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
`;

function BigTitle() {
  return <BigTitleContainer>PROJECT</BigTitleContainer>;
}

export default BigTitle;
