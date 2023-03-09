import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function test() {
  return (
    <Container>
      <Row xs={4}>
        <Col sm={1}>1 of 3</Col>
        <Col sm={1}>2 of 3</Col>
        <Col sm={1}>3 of 3</Col> <Col sm={1}>1 of 3</Col>
        <Col sm={1}>2 of 3</Col>
        <Col sm={1}>3 of 3</Col> <Col sm={1}>1 of 3</Col>
        <Col sm={1}>2 of 3</Col>
        <Col sm={1}>3 of 3</Col> <Col sm={1}>1 of 3</Col>
        <Col sm={1}>2 of 3</Col>
        <Col sm={1}>3 of 3</Col>
      </Row>
      <Row xs={4}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default test;
