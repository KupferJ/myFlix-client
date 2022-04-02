import React, { useState } from 'react';
import PropTypes from 'prop-types';

//import for Bootstrap
import { Form, Button, Col, Row } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  //form built with Bootstrap
  return(
    <Form>
      <Form.Group as={Row} controlId="formUsername">
        <Form.Label column sm={2}>Username</Form.Label>
        <Col sm={10}>
        <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPassword">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col sm={10}>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
      <Col sm={{ span: 12, offset: 2 }}>
      <Button variant="outline-success" type="submit" onClick= { handleSubmit }>
        Submit
      </Button>
      </Col>
      </Form.Group>
    </Form>
  );


  // return (
  //   <form>
  //     <label>
  //       Username:
  //       <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
  //     </label>
  //     <label>
  //       Password:
  //       <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
  //     </label>
  //     <button type="submit" onClick={handleSubmit}>Login</button>
  //   </form>
  // );
}

LoginView.proTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  onLoggedIn: PropTypes.func.isRequired
};