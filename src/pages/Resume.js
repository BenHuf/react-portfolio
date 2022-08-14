import { Stack } from "react-bootstrap";
// @ts-ignore
import PDF from "../images/ResumePDF.pdf";

const Resume = (props) => {
  return (
    <div className="component">
      <h1>Resume</h1>
      <p>Download my <a href={PDF} download="Resume">resume</a>.</p>
      <h2 className="my-4">Proficiencies</h2>
        <p>Javascript</p>
        <p>MySQL and MongoDB</p>
        <p>Express</p>
        <p>React</p>
        <p>Node</p>
        <p>Handlebars</p>
        <p>Typescript</p>
        <p>Python</p>
        <p>MERN</p>
        <p>Patience</p>
    </div>
  )
}

export default Resume;