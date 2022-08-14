import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { validateEmail } from '../utils/helpers'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Container fluid>
      <h1>Contact me</h1>
      <Row>
        <form id="contact-form" onSubmit={handleSubmit}>
          <Col>
            <label htmlFor="name">Name:</label>
          </Col>
          <Col>
            <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
          </Col>
          <Col>
            <label htmlFor="email">Email address:</label>
          </Col>
          <Col>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </Col>
          <Col>
            <label htmlFor="message">Message:</label>
          </Col>
          <Col>
            <textarea name="message" rows={5} defaultValue={message} onBlur={handleChange} />
          </Col>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        <Button type="submit" className="contact-btn" variant="outline-success">Submit</Button>
        </form>
      </Row>
    </Container>
  );
}

export default ContactForm;