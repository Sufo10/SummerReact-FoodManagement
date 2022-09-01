import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import useLogout from '../customHooks/useLogout';
import { OutNav, Nav, H1, Button, NavLink } from '../styled/Navigation.style';

const NavBar = () => {
  const { token } = useContext(UserContext);
  const { logout } = useLogout();

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
        {token && (
          <>
            <Button>
              <NavLink onClick={logout} to='/'>
                Logout
              </NavLink>
            </Button>
          </>
        )}
        {!token && (
          <>
            <Button>
              <NavLink to='/login'>Login</NavLink>
            </Button>
            <Button>
              <NavLink to='/register'>Register</NavLink>
            </Button>
          </>
        )}
      </Nav>
    </OutNav>
  );
};

export default NavBar;
