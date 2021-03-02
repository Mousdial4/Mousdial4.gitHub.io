import styled from "styled-components";
import React from "react";
import Burger from "./Burger";

const Nav = styled.nav`
  background: white;
  width: auto;
  height: auto;
  border-bottom: 0.9px solid black;
  display: flex;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 35px;

    padding: 10px 12px;
  }
  p {
    display: flex;
    width: 40px;
    height: 40px;
    border: 5px double red;
    justify-content: center;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <p>M</p>
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
