import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
`;

const ContactTitle = styled.div`
  font-size: 5rem;
`;

const ContactContentBox = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 2rem;
  font-weight: 100;
  line-height: 3.2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <ContactContentBox>
        <ContactContent>안녕</ContactContent>
        <ContactContent>
          <div>social</div>
          <div>notion</div>
          <div>blog</div>
          <div>github</div>
        </ContactContent>
        <ContactContent>
          <div>contact</div>
          <div>adress</div>
          <div>phone</div>
          <div>e-mail</div>
        </ContactContent>
      </ContactContentBox>
    </ContactContainer>
  );
}

export default Contact;
