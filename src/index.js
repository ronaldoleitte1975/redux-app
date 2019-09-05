import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux';
import { Store } from './store';
import App from './App'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));
