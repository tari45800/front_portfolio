import styled from "styled-components";
import Observer from "../components/Observer";

const ContactContainer = styled.div`
  display: flex;
  padding: 5rem;
  margin-top: 5vw;
`;

const ContactTitle = styled.div`
  flex: 1;
  font-size: 5rem;
  @media screen and (max-width: 80rem) {
    font-size: 3rem;
  }
`;

const ContactContentBox = styled.div`
  flex: 2.5;
  font-size: 1vw;
  line-height: 1.5vw;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 80rem) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
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
      <ContactTitle>
        <Observer>Contact</Observer>
      </ContactTitle>
      <ContactContentBox>
        <ContactContent></ContactContent>

        <ContactContent>
          <Observer>
            <div className="ContactContentTitle gray">LOGS</div>
            <div>
              <a href="https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4">
                RESUME
              </a>
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
          </Observer>
        </ContactContent>
        <ContactContent>
          {" "}
          <Observer>
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
          </Observer>
        </ContactContent>
      </ContactContentBox>
    </ContactContainer>
  );
}

export default Contact;
