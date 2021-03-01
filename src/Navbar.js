import styled from "styled-components";
import React from "react";
import MePic from "./images/vectorstock_32126882-removebg-preview.png";
import Burger from "./Burger";

const Nav = styled.nav`
  background: black;
  width: auto;
  height: auto;
  border-bottom: 0.6px solid black;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  img {
    max-height: 50px;
    border: 0.1px double red;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={MePic} />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
/* 
  ul {
    list-style: none;
    text-decoration: none;
    color: red;
    justify-content: flex-end;
  }
  a {
    text-decoration: none;
    color: red;
    padding: 20px;
  }
  a:hover {
    background: #1565c0;
  }*/
