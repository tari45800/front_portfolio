import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const VerticalLineContainer = styled.div`
  width: 0.08rem;
  background-color: black;
  height: 100%;
  transform: scaleY(${(props) => (props.visible ? 1 : 0)});
  transform-origin: top center;
  transition: transform 1s ease-in-out;
  transition-delay: 0.2s;
  margin: 0 auto;

  @media screen and (max-width: 36rem) {
    width: 0.06rem;
  }
`;

function VerticalLine() {
  const [isVisible, setIsVisible] = useState(false);
  const verticalLineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (verticalLineRef.current) {
      observer.observe(verticalLineRef.current);
    }

    return () => {
      if (verticalLineRef.current) {
        observer.unobserve(verticalLineRef.current);
      }
    };
  }, []);

  return (
    <VerticalLineContainer
      ref={verticalLineRef}
      visible={isVisible}
    ></VerticalLineContainer>
  );
}

export default VerticalLine;
