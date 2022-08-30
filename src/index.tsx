import React from 'react';
import { App } from './components/App/App';
import { createRoot } from 'react-dom/client';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => console.log('success'))
    .catch((e) => console.log('error', e));
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker
//       .register('/sw.js?')
//       .then(function () {
//         console.log('Service Worker Registered!!');
//       })
//       .catch((e) => console.error('cant register SW', e));
//   });
// }

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
