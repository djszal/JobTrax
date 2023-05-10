import React from 'react';
import './style/App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Estimate from './components/Estimate';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
            ></Route>
          <Route 
            path="/estimate"
            element={<Estimate />}
            ></Route>

        </Routes>
    </div>
  </div>
  );
}

export default App;
