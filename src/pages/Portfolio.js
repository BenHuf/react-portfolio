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
      <p>Please check out some of my works. Click the title to be taken to the GitHub repo. Click the preview image to be taken to the deployed application!</p>
      <div className="d-flex justify-content-center align-content-center">
        <Container className=" row">
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/nickrearl/listenin">ListenIn</a></h2>
          <a className="work" href="https://listeninlistenin.herokuapp.com">
            <img src={listenin}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/benhuf/javascript-quiz">Coding Quiz</a></h2>
          <a className="work" href="https://benhuf.github.io/javascript-quiz">
            <img src={quiz}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/benhuf/encounter-gen">Cloud Encounter</a></h2>
          <a className="work" href="https://benhuf.github.io/encounter-gen/">
            <img src={encounter}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/BenHuf/run-buddy">Run Buddy</a></h2>
          <a className="work" href="https://benhuf.github.io/run-buddy/">
            <img src={runbuddy}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/BenHuf/password-generator/">Password Generator</a></h2>
          <a className="work" href="https://benhuf.github.io/password-generator/">
            <img src={password}/>
          </a>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="github-link"><a href="https://github.com/BenHuf/weather-dash">Weather Dashboard</a></h2>
          <a className="work" href="https://BenHuf.github.io/weather-dash">
            <img src={weather}/>
          </a>
        </Col>
        </Container>
      </div>
    </div>
  )
}

export default Portfolio;