import { Nav, Navbar, Container }from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "../style.scss";

const Navigation = (props) => {

  return (
    <>
      <Navbar sticky="top" className="navBg" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Benjamin Huffman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#about" as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link href="#portfolio" as={Link} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact" as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link href="#resume" as={Link} to="/resume">Resume</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default Navigation;