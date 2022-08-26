import styled from 'styled-components';
import { Link } from 'react-router-dom';

// name/logo of the organization
export const H1 = styled.h1`
  margin: 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  flex: 90%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

// nav bar buttons
export const Button = styled.button`
  text-decoration: none;
  /* padding: 0.1rem 3rem; */
  background-color: white;
  border: none;
  /* font-size: 1.5rem; */
  font-size: 20px;
  font-weight: bold;
  /* border-radius: 0.4rem; */
  flex: 10%;
  /* margin: 5px; */
  /* width: 10px; */
`;

// navigation bar container
export const Nav = styled.div`
  display: flex;
  /* background-color: #d3d3d3; */
  width: 80%;
  /* height: 30px; */
  margin: auto;
  overflow: auto;
`;

// navigation outer container
export const OutNav = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  /* height: auto; */
  margin: auto;
  padding: 0px;
  overflow: auto;
  position: fixed;
  z-index: 1;
`;