import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    // pass store to Provider, and initialize store to connect all reducers by passing reducers to createStore
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));
