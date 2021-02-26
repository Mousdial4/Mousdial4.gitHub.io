import MePic from './images/MePic.jpeg';
import styled from 'styled-components';

const Div = styled.div`

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
