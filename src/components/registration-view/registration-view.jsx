import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Form, Button, Col, Row, Container } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

//hook for errors
const [ usernameErr, setUsernameErr ] = useState('');
const [ passwordErr, setPasswordErr ] = useState('');
const [ emailErr, setEmailErr ] = useState('');
    
//validation function
  const validate = () => {
    let isReq = true;

    if(!username) {
      setUsernameErr('Username is required');
      isReq = false;
    }else if (username.length < 5) {
      setUsernameErr('Username must be at least 5 characters long')
      isReq = false;
    }

    if(!password) {
      setPasswordErr('Password is required');
      isReq = false;
    }else if (password.length < 5) {
      setPasswordErr('Password must be at least 5 characters long')
      isReq = false;
    }

    if(!email) {
      setEmailErr('Email is required');
      isReq = false;
    }else if (email.indexOf('@') === -1) {
      setEmailErr('Enter a valid Email')
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      axios.post ('https://movie-api-777.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then (response => {
        const data = response.data;
        console.log(data);
        alert('Registration has been successful!')
        window.open('/', '_self');
      });
    }
  };

  return (
    <Container id="regist-cont">
    <Form><br/>
      <Form.Group as={Row}>
        <Form.Label column md={3}>
          Username
        </Form.Label>
        <Col md={9}>
          <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          { /* display validation error */ }
          { usernameErr && <p>{usernameErr}</p> }
        </Col>
      </Form.Group><br/>

      <Form.Group as={Row}>
        <Form.Label column md={3}>
          Password
        </Form.Label>
        <Col md={9}>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          { /* display validation error */ }
          { passwordErr && <p>{passwordErr}</p> }
        </Col>
      </Form.Group><br/>

      <Form.Group as={Row}>
        <Form.Label column md={3}>
          Email
        </Form.Label>
        <Col md={9}>
          <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          { /* display validation error */ }
          { emailErr && <p>{emailErr}</p> }
        </Col>
      </Form.Group><br/>

      <Form.Group as={Row}>
        <Form.Label column md={3}>
          Birthday
        </Form.Label>
        <Col xs="auto">
          <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 12, offset: 3 }}>
        <Button id="regis-but" variant="outline-success" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        </Col>
      </Form.Group>
    </Form>
    </Container>
  );
}

RegistrationView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }),
  onRegistration: PropTypes.func.isRequired
};
