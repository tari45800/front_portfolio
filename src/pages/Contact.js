import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  padding: 5rem;
`;

const ContactTitle = styled.div`
  flex: 1;
  font-size: 5rem;
`;

const ContactContentBox = styled.div`
  flex: 2.5;
  font-size: 1vw;
  line-height: 1.5vw;
  display: flex;
  justify-content: space-between;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .ContactContentTitle {
    margin-bottom: 2.5vw;
  }

  .gray {
    color: rgb(200, 200, 200);
  }

  .information {
    display: flex;
    gap: 1vw;
  }

  a {
    color: black;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <ContactContentBox>
        <ContactContent>
          <div className="ContactContentTitle gray">LOGS</div>
          <div>나는 지수야</div>
        </ContactContent>
        <ContactContent>
          <div className="ContactContentTitle gray">LOGS</div>
          <div>
            <a href="">NOTION</a>
          </div>
          <div>
            <a href="https://tari45800.tistory.com/" target="_blank">
              BLOG
            </a>
          </div>
          <div>
            <a href="https://github.com/tari45800" target="_blank">
              GITHUB
            </a>
          </div>
        </ContactContent>
        <ContactContent>
          <div className="ContactContentTitle gray">INFORMATION</div>
          <div className="information">
            <div>
              <div className="gray">ADRESS</div>
              <div className="gray">PHONE</div>
              <div className="gray">E-MAIL</div>
            </div>
            <div>
              <div>부산광역시 수영구</div>
              <div>010-9526-7933</div>
              <div>tari45800@gmail.com</div>
            </div>
          </div>
        </ContactContent>
      </ContactContentBox>
    </ContactContainer>
  );
}

export default Contact;
