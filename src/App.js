import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Me from './components/Me';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AlternateTimeline from './components/AlternateTimeline';
import Timeline from './components/AlternateTimeline/index12'
import Footer from './components/Footer';


import  './styles/_reset.scss';
import './App.scss';

// import HeaderMui from './components/HeaderMui';

function App() {
  const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    
    <div className={isDarkMode ? 'app' : 'app light'}>
{/* sx={{ color: 'red', fontSize: 40 }} */}
      
        <Header />
        {/* <HeaderMui /> */}
        
        {/* <HeaderDesktop />
        <HeaderMobile /> */}
        <Me />
        <Skills />
        <Projects />
        <Contact />
        <AlternateTimeline />
        {/* <Timeline /> */}
        <Footer />
        

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
