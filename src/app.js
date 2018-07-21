import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import Cognito from './aws/cognito';
import { history } from './routers/AppRouter';
import { login } from './actions/auth';
import { startRead } from './actions/organization';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

const user = Cognito.getAuthenticatedUser();
if (user) {
	store.dispatch(login(user.username));
	store.dispatch(startRead());
	history.push('/dashboard');
}