import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcManager, FcCalendar } from "react-icons/fc";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import Hobbies from "../Part/Hobbies";
import TopicName from "../Part/TopicName";
import { Container } from "react-bootstrap";

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
          <Col sm={4}>
            <TopicName name="About Me" namecolor="red" />
            <br />
          </Col>
          <Col>
            <Container>
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
            </Container>
          </Col>
        </Row>
      </IconContext.Provider>
      <br />
      <hr class="red" />
    </div>
  );
}
export default AboutMe;
