import styled from "styled-components";
import Observer from "./Observer";

// sorry
const BigTitleContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
  @media screen and (max-width: 36rem) {
    font-size: 4rem;
  }
`;

function BigTitle() {
  return (
    <BigTitleContainer>
      <Observer>PROJECT</Observer>
    </BigTitleContainer>
  );
}

export default BigTitle;
