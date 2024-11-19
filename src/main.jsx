

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor }  from './store/store';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    {/* <React.StrictMode> */}

      <App />
      </PersistGate>
    {/* </React.StrictMode> */}
    
  </Provider>
);

