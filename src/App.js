import React from 'react';
import Header from './components/Header';
import AlternateTimeline from './components/AlternateTimeline';
import Footer from './components/Footer';
// import { Counter } from './features/counter/Counter';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import  './styles/_reset.scss';
import './App.scss';

function App() {
  return (
    
    <div className="App">

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">

        <Header />
        <AlternateTimeline />
        <Footer />
        
      </Container>
    </React.Fragment>
        

      {/* <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
