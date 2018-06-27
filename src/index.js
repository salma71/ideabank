import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import './index.css';
import IdeasIndex from './components/ideas_index'
import IdeasNew from './components/ideas_new';
import IdeasShow from './components/ideas_show'


// import App from './App';
import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker';
import MyFooter from './components/footer';
import About from './components/about'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)


ReactDOM.render(
    // <App />
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <About />
                <Switch>
                    
                    {/* most specific route at the top */}
                    <Route path="/ideas/new" component={IdeasNew} />
                    <Route path="/ideas/:id" component={IdeasShow} />
                    <Route path="/" component={IdeasIndex} />
                </Switch>
                <MyFooter />
            </div>
        </BrowserRouter>
    </Provider>
        ,document.getElementById('root'));
registerServiceWorker();
