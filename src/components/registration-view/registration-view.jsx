import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Col, Row } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onRegistration(username) */
    props.onRegistration(username);
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Username
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Birthday
        </Form.Label>
        <Col xs="auto">
          <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 12, offset: 2 }}>
        <Button variant="outline-success" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        </Col>
      </Form.Group>
    </Form>
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
