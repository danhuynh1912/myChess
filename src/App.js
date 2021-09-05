import './App.css';

import React, { useEffect } from 'react';

import ModalSwitch from './components/ModalSwitch';

import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify({playerID: -1}));
  //   sessionStorage.setItem("ID", JSON.stringify({playerID: -1}));
  // }, [])
  
  return (
    <div className="App">
      <Router>
        <ModalSwitch />
      </Router>
    </div>
  );
}

export default App;