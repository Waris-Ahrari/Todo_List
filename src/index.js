import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import PreviewArea from './components/PreviewArea/PreviewArea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{width: '100vw', height: '100vh'}}>
  <Header/>
  <PreviewArea/>
  </div>
    

);

