import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #dc143c;
  li {
    padding: 30px 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #f0efe2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: auto;
    width: auto;
    padding-top: 3rem;
    transition: transform 0.2s ease-in-out;
    li {
      color: #dc143c;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li
        onClick={(e) => {
          e.preventDefault();
          window.location.replace("/");
        }}
      >
        Home
      </li>
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
