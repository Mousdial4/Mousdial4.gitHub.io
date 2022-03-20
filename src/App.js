import MePic from "./images/MePic-removebg-preview.png";
import styled from "styled-components";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import { Link } from "react-router-dom";

const Div = styled.div`
  background: #f0efe2;

  .wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    font-family: "Lucida Console", "Courier New", monospace;
    padding-bottom: 50px;
  }
  img {
    width: 600px;
    height: 600px;
    border-radius: 700px;
    border: 5px double red;
  }

  .aside-1 {
    text-align: center;
    flex: 4;
    order: 1;
  }
  .aside-2 {
    text-align: center;
    font-size: 60px;
    color: red;
    font-family: "Lucida Console", "Courier New", monospace;
    flex: 3;
    order: 2;
    font-weight: 550;
  }
  .aside-2 p {
    font-size: 25px;
    color: black;
    font-weight: bold;
  }
  button {
    font-weight: bold;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid red;
    font-family: "Lucida Console", "Courier New", monospace;
  }
`;

function App() {
  return (
    <Div>
      <div className="wrapper">
        <aside className="aside aside-1">
          <a href="https://www.linkedin.com/in/moussa-diallo-8654a81bb/">
            <img src={MePic} alt="Moussa Diallo" />
          </a>
        </aside>
        <aside className="aside aside-2">
          <p> Hello My Name is </p>
          Moussa Diallo
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#about");
              }}
            >
              All About Me
            </button>
          </div>
        </aside>
      </div>
      <Aboutme />
      <Resume />
    </Div>
  );
}

export default App;
