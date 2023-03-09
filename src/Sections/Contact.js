import Center from "react-center";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcIphone, FcAddressBook, FcHome } from "react-icons/fc";
import { IconContext } from "react-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { MdContentCopy } from "react-icons/md";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";

function Contact() {
  let buttoncopy = (
    <CopyToClipboard
      text={"0882319406"}
      onCopy={() => NotificationManager.success("", "Copied", 2000)}
    >
      <button>
        <IconContext.Provider value={{ size: "1em" }}>
          <MdContentCopy />
        </IconContext.Provider>
      </button>
    </CopyToClipboard>
  );
  return (
    <div>
      <IconContext.Provider value={{ size: "2em" }}>
        <Row>
          <Col sm={4}>
            <TopicName name="Contact" namecolor="blue" />
            <br />
          </Col>

          <Col>
            <Container>
              <p>
                <FcIphone />
                &nbsp;Phone: 088-231-9406&nbsp;&nbsp;
                {buttoncopy}
              </p>
              <p>
                <FcAddressBook />
                &nbsp;Email:{" "}
                <a href="mailto: damrongkiat.h@gmail.com">
                  damrongkiat.h@gmail.com
                </a>
              </p>
              <p>
                <FcHome />
                &nbsp;Address: Chonburi Thailand
              </p>
            </Container>
          </Col>
        </Row>
      </IconContext.Provider>
      <NotificationContainer />
      <br />
      <hr class="blue" />
    </div>
  );
}
export default Contact;
