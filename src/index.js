import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// import reducers from './reducers'
import './index.css';
import './system.css';

import App from './App';

// redux store creation
// const store = configureStore({
//   reducer: reducers,
//   middleware: [thunk],
// })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);