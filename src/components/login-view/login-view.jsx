import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

//import for Bootstrap
import { Form, Button, Col, Row, Container, Card, Link } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

//hook for errors
  const [ usernameErr, setUsernameErr] = useState('');
  const [ passwordErr, setPasswordErr] = useState('');

  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr('Username is required');
    }else if (username < 5) {
      setUsernameErr('Username must be at least 5 characters long');
      isReq=false;
    }
    if(!password) {
      setPasswordErr('Password is required');
      isReq=false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios.post ('https://movie-api-777.herokuapp.com/login', {
        Username: username,
        Password: password
      })
        .then(response => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user')
        });
    }
  }

  //form built with Bootstrap
  return(
    <Container id="login-cont">
    <Form id="form-bg"><br/>
      <Form.Group as={Row} controlId="formUsername" id="login-form">
        <Form.Label column md={3}>Username</Form.Label>
        <Col md={9}>
        <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        { /* display validation error */ }
        { usernameErr && <p>{usernameErr}</p> }
        </Col>
      </Form.Group><br/>
      <Form.Group as={Row} controlId="formPassword">
        <Form.Label column md={3}>Password</Form.Label>
        <Col md={9}>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        { /* display validation error */ }
        { passwordErr && <p>{passwordErr}</p> }
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
      <Col sm={{ span: 12, offset: 3 }}>
      <Button id="login-but" variant="outline-success" type="submit" onClick= { handleSubmit }>
        Login
      </Button>
      </Col>

      </Form.Group>
    </Form><br/><br/><br/>
    <Col id="login-remind">Don't have an account yet?</Col><br/>
      <Button href="/register" id="regis-but" variant="outline-primary" size="lg">Register</Button>
    </Container>
  );

}
