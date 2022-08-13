import { NavDropdown } from "react-bootstrap";
import { Nav, Navbar, Container }from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "../style.scss";

const Navigation = (props) => {

  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">Benjamin Huffman</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link as={Link} to="/" active>Home</Nav.Link> */}
                    <Nav.Link as={Link} to="/about" active>About</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio" active>Portfolio</Nav.Link>
                    <Nav.Link as={Link} to="/contact" active>Contact</Nav.Link>
                    <Nav.Link as={Link} to="/resume" active>Resume</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
      <section>
       <Outlet></Outlet>
      </section>
    </>
  )
}

export default Navigation;