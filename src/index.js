import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    // pass store to Provider, and initialize store to connect all reducers by passing reducers to createStore
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root'));
