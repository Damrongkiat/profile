import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";

function Certificate() {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <TopicName name="Certificate" namecolor="purple" />
          <br />
        </Col>
        <Col>
          <Container>
            <p>
              สร้างเว็บไซต์จากเริ่มต้นจนถึงมือโปร ด้วย HTML5/CSS3/JavaScript -
              FutureSkill
            </p>
            <p>
              React ตั้งแต่พื้นฐาน จนสร้าง Chat Application ได้ - FutureSkill
            </p>
          </Container>
        </Col>
      </Row>
      <br />
      <hr class="purple" />
    </div>
  );
}

export default Certificate;
