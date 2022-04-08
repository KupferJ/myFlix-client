import React from 'react';

import { Row, Col } from 'react-bootstrap';

export function UserData({ userdata }) {
  return (
    <Row>
      <Col>
      <h4>Personal Data</h4>
      <p>Username: {userdata.Username}</p>
      <p>Email: {userdata.Email}</p>
      <p>Birthday: {userdata.Birthday}</p>
      </Col>
    </Row>
  )
}

