import React from 'react';

import { Form, Button } from 'react-bootstrap';

//form to update user data
export function UpdateUser({ userdata, handleSubmit, handleUpdate }) {
  return (
    <>
      <h4>Update User Information</h4>
      <Form className="mb-3">
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control 
          type="text" 
          name="Username" 
          placeholder="New Username" 
          onChange={e => handleUpdate(e)} />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control 
          type="password" 
          name="Password" 
          placeholder="New Password" 
          onChange={e => handleUpdate(e)} />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control 
          type="email" 
          name="Email" 
          placeholder="New Email" 
          onChange={e => handleUpdate(e)} />
        </Form.Group>

        <Form.Group controlId="formBirthday" className="mb-3">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control 
          type="date" 
          name="Birthday" 
          onChange={e => handleUpdate(e)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </>

  )
}