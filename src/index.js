import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleWare } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import IdeasIndex from './components/ideas_index'
// import App from './App';
// import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleWare


ReactDOM.render(
    // <App />
    <BrowserRouter>
        <div>
            <Route path="/" component={IdeasIndex} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
