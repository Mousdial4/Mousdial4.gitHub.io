import styled from "styled-components";
import React from "react";

const Navbar = styled.nav`
  background: deepskyblue;
  ul {
    display: flex;
    list-style: none;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin: 0;
  }
  a {
    text-decoration: none;
    display: flex;
    padding: 20px;
    color: white;
  }
  a:hover {
    background: #1565c0;
  }
`;

function NavBar() {
  return (
    <Navbar>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;
