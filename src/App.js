import MePic from "./images/MePic.jpeg";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  img {
    padding: 5px;
    border: 4px double red;
    max-height: 150px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;

function App() {
  return (
    <Div>
      <a href="#linkedin">
        <img src={MePic} alt="Moussa Diallo" />
      </a>
      <p>Moussa Diallo</p>
    </Div>
  );
}

export default App;
