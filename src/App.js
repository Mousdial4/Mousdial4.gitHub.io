import MePic from './images/MePic.jpeg';
import styled from 'styled-components';

const Div = styled.div`

`;


function App() {
  return (
    <Div>
      <header className="App-header">
        <img src={MePic} className="App-logo" alt="logo" />
        <p>Moussa Diallo</p>
       
      </header>
    </Div>
  );
}

export default App;
