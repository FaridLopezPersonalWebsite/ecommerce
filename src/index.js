import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import ShopContextProvider from './Context/ShopContext';
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);  // Use createRoot

reactRoot.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
