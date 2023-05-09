import React from 'react';
import './style/App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Estimate from './components/Estimate';

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
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
