import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: red;
  li {
    padding: 30px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: red;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li
        onClick={(e) => {
          e.preventDefault();
          window.location.replace("/#about");
        }}
      >
        About
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          window.location.replace("/#contact");
        }}
      >
        Contact
      </li>
    </Ul>
  );
};

export default RightNav;
