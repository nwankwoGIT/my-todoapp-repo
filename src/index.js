import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheet/styles.css';
import './App.css';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <BrowserRouter>
        <TodoApp />          
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();