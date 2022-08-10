import React from 'react';

import { OutNav, Nav, H1, Button } from '../styled/Navigation.style';
// ex: style for heading imported
// import { Heding } from '../styled-components/Navigation.style'

// a demo/template component where code for the navigation bar will be written
const NavBar = () => {
  return (
    <OutNav>
      <Nav>
        <H1>weFEED</H1>
        <Button>Home</Button>
        <Button>Food</Button>
        <Button>Login</Button>
        <Button>Register</Button>
      </Nav>
    </OutNav>
  );
};

export default NavBar;
