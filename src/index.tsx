import React from 'react';
import { App } from './components/App/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function () {
        console.log('Service Worker Registered!!');
      })
      .catch((error) => {
        console.error('cant register SW', error);
      });
  });
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
