import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reduce from './reduce/index'

const store = createStore(reduce,
//触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined)

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
