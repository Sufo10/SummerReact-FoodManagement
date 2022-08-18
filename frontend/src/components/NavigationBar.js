import { OutNav, Nav, H1, Button, NavLink } from '../styled/Navigation.style';
// ex: style for heading imported
// import { Heding } from '../styled-components/Navigation.style'

// a demo/template component where code for the navigation bar will be written
const NavBar = () => {
  return (
    <OutNav>
      <Nav>
        <H1>
          <NavLink to='/'>weFEED</NavLink>
        </H1>
        <Button>
          <NavLink to='/'>Home</NavLink>
        </Button>
        <Button>
          <NavLink to='/food'>Food</NavLink>
        </Button>
        <Button>
          <NavLink to='/login'>Login</NavLink>
        </Button>
        <Button>
          <NavLink to='/register'>Register</NavLink>
        </Button>
      </Nav>
    </OutNav>
  );
};

export default NavBar;
