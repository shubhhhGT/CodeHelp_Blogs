import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //wrapping the App component inside the context to pass all the data
  //App component is children of the context
  <AppContextProvider>
    <App/> 
  </AppContextProvider>
);

