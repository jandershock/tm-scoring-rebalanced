import React from 'react';
import ReactDOM from 'react-dom/client';
import { TMScoringRebalanced } from './components/TMScoringRebalanced';
import { BrowserRouter as Router } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <TMScoringRebalanced />
    </Router>
  // </React.StrictMode>
);
