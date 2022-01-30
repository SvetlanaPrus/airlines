import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {store} from "./lib/redux/init/store.js";

ReactDOM.render(
  <>
      <Provider store = { store }>
          <App />
      </Provider>
  </>,
  document.getElementById('root')
);


