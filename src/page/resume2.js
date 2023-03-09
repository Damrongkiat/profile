import "../App.css";
import { Container } from "react-bootstrap";
import Skills from "../Sections/Skills2";
import Education from "../Sections/Education2";
import Certificate from "../Sections/Certificate2";
import Contact from "../Sections/Contact2";
import Avatar from "../Sections/Avatar";
import AboutMe from "../Sections/AboutMe2";
import Test from "../Sections/test";
import Center from "react-center";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderImage from "../Sections/HeaderImage";
import Card from "react-bootstrap/Card";

function resume2() {
  return (
    <div className="layoutwarp">
      <div className="layoutcontent">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <br />
              <Avatar />
              <br />
            </Col>
            <Col sm={8}>
              <AboutMe />
              <br />
            </Col>
            <Col sm={8}>
              <Contact />
              <br />
            </Col>
            <Col sm={8}>
              <Skills />
              <br />
            </Col>
            <Col sm={8}>
              <Education />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default resume2;
