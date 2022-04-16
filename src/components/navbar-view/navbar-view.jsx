import React from 'react';

import { Container, Button, Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './navbar-view.scss';

export function NavbarView() {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  const isAuth = () => {
    if (typeof window =='undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }else{
      return false
    }
  };

  return (
  <Container>
    <Navbar expand="sm" className="fixed-top nav-bar" id="nav-main">
        <Navbar.Brand href={'/'} id="nav-brand">MyMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav-main">
            <Nav className="ml-auto" id="nav-main">
            {isAuth() && (
              <Nav.Link as={Link} to={'/users/${user}'} id="nav-pr">Profile</Nav.Link>
            )}

            {isAuth() && (
            <Button
              variant="outline-danger" onClick={() =>{ onLoggedOut() }} id="nav-lg">Logout</Button>
            )}

            {!isAuth() && (
            <Nav.Link href={'/'}>Sign-in</Nav.Link>
            )}

            {!isAuth() && (
              <Nav.Link href={'/register'}>Register</Nav.Link>
            )}   
            </Nav>
          </Navbar.Collapse>
    </Navbar>
  </Container>
  )
}
