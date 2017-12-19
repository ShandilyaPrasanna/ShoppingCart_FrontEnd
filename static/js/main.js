import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers/index';
import App from './App';


const middleware=applyMiddleware(thunk);

let store = createStore(allReducer,middleware);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

