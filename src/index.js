import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Router, browserHistory } from 'react-router'
// import { save, load } from "redux-localstorage-simple"
import promise from 'redux-promise';


import './index.css';
import IdeasIndex from './components/ideasIndex'
import IdeasNew from './components/ideasNew';
import IdeasShow from './components/ideasShow'


// import App from './App';
import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker';
import MyFooter from './components/footer';
import About from './components/about'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
        applyMiddleware(promise)
    ));
// const persistor = persistStore(store)    

// const createStoreWithMiddleware = applyMiddleware(promise)(store)


ReactDOM.render(
    // <App />
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
        {/* <Router history={browserHistory}> */}
            <div>
                <About />
                {/* <Ideasshow /> */}
                <Switch>
                    
                    {/* most specific route at the top */}
                    <Route path="/ideas/new" component={IdeasNew} />
                    <Route path="/ideas/:id" component={IdeasShow} />
                    <Route path="/" component={IdeasIndex} />
                </Switch>
                <MyFooter />
            </div>
        </BrowserRouter>
        {/* </PersistGate> */}
        {/* </Router> */}
    </Provider>
        ,document.getElementById('root'));
registerServiceWorker();
