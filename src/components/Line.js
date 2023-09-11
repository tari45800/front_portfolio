import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const LineContainer = styled.div`
  height: 0.08rem;
  background-color: black;
  width: ${(props) => (props.visible ? "100%" : "0%")};
  transition: width 0.5s ease-in-out;
  transition-delay: 0.2s;
  margin: 0 auto;
`;

function Line() {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null);

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

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return <LineContainer ref={lineRef} visible={isVisible}></LineContainer>;
}

export default Line;
