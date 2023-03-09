import { Container } from "react-bootstrap";
import Skills from "../Sections/Skills";
import Education from "../Sections/Education";
import Certificate from "../Sections/Certificate";
import Contact from "../Sections/Contact";
import Avatar from "../Sections/Avatar";
import AboutMe from "../Sections/AboutMe";
import Test from "../Sections/test";
import Center from "react-center";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderImage from "../Sections/HeaderImage";

function resume1() {
  return (
    <div className="layoutwarp">
      <div className="layoutcontent">
        <HeaderImage />
        <Container>
          <br />
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <p>
                <Avatar />
              </p>
            </Col>
            <Col sm={8}>
              <p>
                <AboutMe />
              </p>
            </Col>
            <Col sm={8}>
              <p>
                <Contact />
              </p>
            </Col>
            <Col sm={8}>
              <p>
                <Skills />
              </p>
            </Col>
            <Col sm={8}>
              <p>
                <Education />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default resume1;
