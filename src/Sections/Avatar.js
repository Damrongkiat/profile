import AvatarImage from "../Part/AvatarImage";
import Name from "../Part/Name";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <AvatarImage />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Name />
        </Col>
      </Row>
      <hr class="black" />
    </div>
  );
}

export default Profile;
