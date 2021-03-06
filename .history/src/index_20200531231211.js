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



const store = configureStore();
const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <PersistGate
            loading = { <div>Loading ...</div> }
            persistor={persistor}>
              <App />
      </PersistGate>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

