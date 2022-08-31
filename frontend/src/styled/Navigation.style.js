import styled from 'styled-components';
import { Link } from 'react-router-dom';

// name/logo of the organization
export const H1 = styled.h1`
  margin: 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  color: rgb(47, 79, 79);
  flex: 90%;

  @media (max-width: 425px) {
    display: none;
    flex: 0%;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  /* color: black; */
  color: rgb(47, 79, 79);
`;

// nav bar buttons
export const Button = styled.button`
  text-decoration: none;
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  flex: 10%;

  @media (max-width: 425px) {
    flex: 100%;
  }
`;

// navigation bar container
export const Nav = styled.div`
  display: flex;
  /* background-color: #d3d3d3; */
  width: 80%;
  /* height: 30px; */
  margin: auto;
  overflow: auto;

  /* @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 16px;
  } */
`;

// navigation outer container
export const OutNav = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  margin: auto;
  padding: 0px;
  overflow: auto;
  position: fixed;
  z-index: 1;
`;
