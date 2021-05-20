import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/responsive.css';
import './css/body.css';
import './css/navbar.css';
import './css/theme.css';
import 'aos/dist/aos.css';

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

