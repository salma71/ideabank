import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import IdeasIndex from './components/ideas_index'
// import App from './App';
import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)


ReactDOM.render(
    // <App />
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={IdeasIndex} />
            </div>
        </BrowserRouter>
    </Provider>
        ,document.getElementById('root'));
registerServiceWorker();
