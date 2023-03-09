import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Buulogo from "../Image/Buu-logo.png";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardFooter from "../Part/CardFooter";

function Education() {
  return (
    <div>
      <Row>
        <Col sm={4} className="d-none d-sm-block">
          <Card>
            <Card.Header>Education</Card.Header>
          </Card>
          <br />
        </Col>
        <Col>
          <Card>
            <Card.Header className="d-block d-sm-none">Education</Card.Header>
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <Image src={Buulogo} fluid />
                </Col>
                <Col>
                  Burapha University (2014 - 2017) <br />
                  Bachelor of Science in Information Technology
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <CardFooter textFooter="" />
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
