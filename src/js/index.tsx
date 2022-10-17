import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import '../style/style.scss';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const container: HTMLElement = document.getElementById('body-div')!;

const root = ReactDOMClient.createRoot(container);

root.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>
);
