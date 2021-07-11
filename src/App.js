import './App.css';

import ModalSwitch from './components/ModalSwitch';

import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ModalSwitch />
      </Router>
    </div>
  );
}

export default App;