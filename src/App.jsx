import './App.css';
import data from './components/events.json';
import { createGlobalStyle } from 'styled-components';
import PageBoard from './components/PageBoard';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }

  * {
    margin: 0px;
    font-family: "Roboto", sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard events={data} />
    </>
  );
}

export default App;
