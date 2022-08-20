import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
