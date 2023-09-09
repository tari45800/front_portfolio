import styled from "styled-components";
import { HiArrowSmallRight } from "react-icons/hi2";

const ButtonContainer = styled.span`
  width: fit-content;

  display: inline-block;

  margin: 1vw 0;
  padding: 0.8vw 1vw;

  border: 0.08rem solid #b3b3b3;
  border-radius: 1.5vw;
  font-weight: normal;
  font-size: 1vw;
  line-height: ${(props) => (props.vw ? `${props.vw}vw` : "0.8vw")};
  background-color: rgb(245, 245, 245);
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    border: 0.08rem solid rgb(50, 50, 50);
  }

  a {
    color: rgb(100, 100, 100);
    font-size: ${(props) => (props.vw ? `${props.vw}vw` : "0.7vw")};
  }
`;

function Button({ content, link, vw }) {
  return (
    <ButtonContainer vw={vw}>
      <a href={link} target="_blank">
        {content}
      </a>
    </ButtonContainer>
  );
}

export default Button;
