import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Buulogo from "../Image/Buu-logo.png";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";

function Education() {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <TopicName name="Education" namecolor="green" />
          <br />
        </Col>
        <Col>
          {" "}
          <Container>
            <Row>
              <Col xs={3}>
                <Image src={Buulogo} fluid />
              </Col>
              <Col>
                Burapha University (2014 - 2017) <br />
                Bachelor of Science in Information Technology
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <br />
      <hr class="green" />
    </div>
  );
}

export default Education;
