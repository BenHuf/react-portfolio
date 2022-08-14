import avatar from "../images/avatar.png"

const About = (props) => {
  return (
    <div className="component">
      <h1>About Me</h1>
      <img className="avatar" src={avatar}/>
      <p>Theres a lot here I guess.</p>
      <p>My name is Ben. I am a person who is studying web development. </p>
      <p>This is a short bio to meet the grading requirements of an assignment. I hope you learned a lot about me.</p>
    </div>
  )
}

export default About;