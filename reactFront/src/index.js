import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import  {rootReducer , rootSaga}   from './reducers';

const sagaMiddleWare= createSagaMiddleware();
const store= createStore(rootReducer ,composeWithDevTools(applyMiddleware(sagaMiddleWare)) );
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
   <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();