import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header';
import Slide from './components/Slide/Slide';
import Tools from './components/Tools/Tools';
import Footer from './common/Footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Slide />
    <Tools />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
