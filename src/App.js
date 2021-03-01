import MePic from "./images/MePic.jpeg";
import styled from "styled-components";

const Div = styled.div`
  img {
    padding: 5px;
    border: 4px double red;
    max-height: 150px;
  }
`;

function App() {
  return (
    <Div>
      <header>
        <img src={MePic} alt="Moussa Diallo" />
        <p>Moussa Diallo</p>
      </header>
    </Div>
  );
}

export default App;
