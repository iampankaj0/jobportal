import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routing />
  </BrowserRouter>,
  document.getElementById('root')
);