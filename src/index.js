import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Assign from './components/table2';
// import PostForm from './Assignment/form3';
// import App from './Assignment/formtable'
// import Form from './components/form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
