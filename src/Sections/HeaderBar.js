import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Profiles</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Navbar.Text>
              <Link to="/resume1" className="navbarpage">
                Resume1
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/resume2" className="navbarpage">
                Resume2
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/todo" className="navbarpage">
                Todo
              </Link>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
