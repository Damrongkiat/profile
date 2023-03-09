import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SkillsImage, { SkillsImageList } from "../Part/SkillsImage";
import Container from "react-bootstrap/Container";
import Center from "react-center";
import TopicName from "../Part/TopicName";
import Card from "react-bootstrap/Card";
import CardFooter from "../Part/CardFooter";

function Skills() {
  const imagelist = SkillsImageList;

  const list = [];
  for (let i = 0; i < imagelist.length; i++) {
    list.push(
      <Col>
        <Image src={SkillsImage(imagelist[i])} fluid />
        <Center>{imagelist[i]}</Center>
      </Col>
    );
  }
  return (
    <div>
      <Row>
        <Col sm={4} className="d-none d-sm-block">
          <Card>
            <Card.Header>Skills</Card.Header>
          </Card>
          <br />
        </Col>
        <Col>
          <Card>
            <Card.Header className="d-block d-sm-none">Skills</Card.Header>
            <Card.Body>
              <Row xs={5} sm={6}>
                {list}
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

export default Skills;
