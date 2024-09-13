import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routes/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Header />
    <RouterComponent />
  </Router>
);

reportWebVitals();
