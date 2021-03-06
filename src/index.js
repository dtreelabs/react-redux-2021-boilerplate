import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {Provider} from 'react-redux';
import userReducer from './features/user';
import examReducer from './features/exams';

const store = configureStore({
  reducer: {
    user: userReducer,
    exam: examReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
