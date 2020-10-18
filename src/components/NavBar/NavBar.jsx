import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Navbar className="NavBar justify-content-between" expand="xl" bg="info">
        <Navbar.Brand href="/"><img src="logo.svg" alt="logo" width="100" /></Navbar.Brand>
        <Navbar/> <Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href='/jobs'>Jobs LIST</Nav.Link>
                <Nav.Link href='/add'>ADD Job</Nav.Link>
                <Nav.Link href='' onClick={props.handleLogout}>LOG OUT</Nav.Link>
              </Nav>
                <Navbar.Text className="h3">WELCOME, {props.user.name}</Navbar.Text>
          </Navbar.Collapse>
        </Nav>
        </Navbar>
    </div>
    :
    <>
      <Navbar className="NavBar justify-content-between" expand="xl" bg="info">
        <Navbar.Brand href="/"><img src="logo.svg" alt="logo" width="100" /></Navbar.Brand>
        <Navbar /> <Nav>
          <Nav.Link href='/login' className='NavBar-link'>LOG IN</Nav.Link>
        </Nav>
      </Navbar>
    </>

  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;