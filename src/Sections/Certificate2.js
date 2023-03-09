import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardFooter from "../Part/CardFooter";

function Certificate() {
  return (
    <div>
      <Row>
        <Col sm={4} className="d-none d-sm-block">
          <Card>
            <Card.Header>Certificate</Card.Header>
          </Card>
          <br />
        </Col>
        <Col>
          <Card>
            <Card.Header className="d-block d-sm-none">Certificate</Card.Header>
            <Card.Body>
              <p>
                สร้างเว็บไซต์จากเริ่มต้นจนถึงมือโปร ด้วย HTML5/CSS3/JavaScript -
                FutureSkill
              </p>
              <p>
                React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้ - FutureSkill
              </p>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <CardFooter textFooter="" />
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default Certificate;
