import styled from "styled-components";

const ButtonContainer = styled.span`
  display: inline-block;
  margin: 1rem auto;
  padding: 1rem 1rem;
  font-size: ${(props) => (props.vw ? `${props.vw}vw` : "0.8vw")};
  font-weight: 400;
  border: 0.08rem solid #b3b3b3;
  border-radius: 2rem;
  line-height: ${(props) => (props.vw ? `${props.vw}vw` : "0.8vw")};

  a {
    color: black;
  }
`;

function Button({ content, link, vw }) {
  return (
    <ButtonContainer vw={vw}>
      <a href={link}>{content}</a>
    </ButtonContainer>
  );
}

export default Button;
