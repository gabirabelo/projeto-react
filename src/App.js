import React from "react";
import NavBar from './components/navbar'
import Routes from './routes'
import { HashRouter } from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Routes />
      </div>
    </HashRouter>

  );
}

export default App;
