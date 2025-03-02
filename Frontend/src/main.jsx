import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // No need to import BrowserRouter here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* App already has BrowserRouter inside */}
  </React.StrictMode>
);


