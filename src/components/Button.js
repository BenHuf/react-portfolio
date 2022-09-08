import React from "react";

class Button extends React.Component {
  constructor(props){
    super(props)
  
    this.state = { clicked: false }
  }

  handleClick = () => this.setState({ clicked: true });

  render() { 
    return <button className="blue" onClick={this.handleClick}>{this.props.text}</button>;
  }
}
 
export default Button;