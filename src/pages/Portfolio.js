import { Col, Container } from "react-bootstrap";
import listenin from "../images/listenin.png";
import runbuddy from "../images/runbuddy.jpg";
import encounter from "../images/encounter.png";
import quiz from "../images/quiz.png";
import password from "../images/password.png";
import weather from "../images/weather.png";

const Portfolio = (props) => {
  return (
    <div className="component">
      <h1>Portfolio</h1>
      <p>Please check out some of my works</p>
      <div className="d-flex justify-content-center align-content-center">
        <Container className=" row">
        <Col sm={6} md={4}>
          <h2>ListenIn</h2>
          <a className="work" href="https://www.google.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2>Coding Quiz</h2>
          <a className="work" href="https://www.google.com">
            <img src={quiz}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2>Cloud Encounter</h2>
          <a className="work" href="https://www.google.com">
            <img src={encounter}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2>Run Buddy</h2>
          <a className="work" href="https://www.google.com">
            <img src={runbuddy}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2>Password Generator</h2>
          <a className="work" href="https://www.google.com">
            <img src={password}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2>Weather Dashboard</h2>
          <a className="work" href="https://www.google.com">
            <img src={weather}/>
          </a>
        </Col>
        </Container>
      </div>
    </div>
  )
}

export default Portfolio;