import styled from "styled-components";

const Navbar = styled.div`
  margin: 0;
  padding: 0;
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
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;
