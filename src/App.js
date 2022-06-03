import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <React.Fragment>
          <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
      </React.Fragment>
      </div>
    </div>
  );
}

export default App;
