import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
//persist store
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import * as serviceWorker from './serviceWorker';

const store = configureStore();
const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
