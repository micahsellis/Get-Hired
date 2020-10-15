import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className='nav-link' exact to='/jobs'>Jobs LIST</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' exact to='/add'>ADD Job</Link>
      </li>
      <li className="nav-item">
        <Link to='' className='nav-link' onClick={props.handleLogout}>LOG OUT</Link>
      </li>
      <li className="nav-item">
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </li>
    </ul>
    :
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className='nav-link' to='/login' className='NavBar-link'>LOG IN</Link>
      </li>
    </ul>;

  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;