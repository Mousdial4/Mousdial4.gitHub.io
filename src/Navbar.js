import styled from "styled-components";
import React from "react";
import MePic from "./images/vectorstock_32126882.jpg";

const Navbar = styled.nav`
  background: black;

  ul {
    list-style: none;
    text-decoration: none;
    color: red;

    justify-content: flex-end;
    align-self: auto;
  }
  a {
    text-decoration: none;
    color: red;
    padding: 20px;
  }
  a:hover {
    background: #1565c0;
  }
  img {
    padding: 5px;
    border: 1px solid white;
    max-height: 90px;
    justify-content: flex-start;
  }
`;

function NavBar() {
  return (
    <Navbar>
      <img src={MePic} alt="Moussa Diallo" />
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
