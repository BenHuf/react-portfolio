import { Col, Container } from "react-bootstrap";
import listenin from "../images/listenin.png"

const Portfolio = (props) => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Theres a lot here I guess</p>
      <div className="d-flex justify-content-center align-content-center">
        <Container className=" row">
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <a href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        </Container>
      </div>
    </div>
  )
}

export default Portfolio;