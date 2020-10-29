import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Class_Based from './class_based_implementation/class_based_implementation';
import RenderingClass from './RenderingContent/RenderingContent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Class_Based></Class_Based> */}
    <RenderingClass></RenderingClass>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
