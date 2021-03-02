import MePic from "./images/MePic-removebg-preview.png";
import styled from "styled-components";

const Div = styled.div`
  .wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    
  }
  img {
    opacity: 0.6;
    width: 700px;
    height: 700px;
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

  }
  .aside-2 p {

    font-size: 20px;
    color: black;
    font-style: italic;
    font-weight: bold;
  }
`;

function App() {
  return (
    <Div>
      <div className="wrapper">
        <aside className="aside aside-1">
          <a href="#linkedin">
            <img src={MePic} alt="Moussa Diallo" />
          </a>
        </aside>
        <aside className="aside aside-2">
          <p>Hello My Name is </p>Moussa Diallo
        </aside>
      </div>
    </Div>
  );
}

export default App;
