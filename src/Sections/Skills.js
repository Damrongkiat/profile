import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SkillsImage, { SkillsImageList } from "../Part/SkillsImage";
import Container from "react-bootstrap/Container";
import Center from "react-center";
import TopicName from "../Part/TopicName";

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
        <Col sm={4}>
          <TopicName name="Skills" namecolor="yellow" />
          <br />
        </Col>
        <Col>
          <Container>
            <Row xs={5} sm={6}>
              {list}
            </Row>
          </Container>
        </Col>
      </Row>
      <br />
      <hr class="yellow" />
    </div>
  );
}

export default Skills;
