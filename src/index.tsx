import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import App from './App';
import './assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
