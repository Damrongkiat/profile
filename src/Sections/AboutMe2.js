import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcManager, FcCalendar } from "react-icons/fc";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import Hobbies from "../Part/Hobbies";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardFooter from "../Part/CardFooter";

function AboutMe() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Birthday = new Date("03/01/1995");
  const age = Math.abs(
    new Date(Date.now() - Birthday.getTime()).getUTCFullYear() - 1970
  );
  return (
    <div>
      <IconContext.Provider value={{ size: "2em" }}>
        <Row>
          <Col sm={4} className="d-none d-sm-block">
            <Card>
              <Card.Header>About Me</Card.Header>
            </Card>
            <br />
          </Col>
          <Col>
            <Card>
              <Card.Header className="d-block d-sm-none">Contact</Card.Header>
              <Card.Body>
                <p>
                  <FcManager />
                  &nbsp;Age: {age}
                </p>
                <p>
                  <FcCalendar />
                  &nbsp;Birthday: {Birthday.getDate()}{" "}
                  {month[Birthday.getMonth()]} {Birthday.getFullYear()}
                </p>
                <p>
                  <BsGithub />
                  &nbsp;Github:{" "}
                  <a href="https://github.com/DamrongkiatH/profile">
                    https://github.com/DamrongkiatH/profile
                  </a>
                </p>
                <Hobbies />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <CardFooter textFooter="" />
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </IconContext.Provider>
    </div>
  );
}
export default AboutMe;
