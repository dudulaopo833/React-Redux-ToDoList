import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoAppReducers from './reducers';
import AppComponent from './components/AppComponent';

const store = createStore(todoAppReducers);

render(
	<Provider store={store}>
		<AppComponent />
	</Provider >,
	document.getElementById('app')
);