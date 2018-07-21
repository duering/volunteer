import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import MyPage from '../components/MyPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>			
				<PublicRoute path="/" component={LoginPage} exact={true}/>
				<PublicRoute path="/register" component={RegisterPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={MyPage} exact={true}/>
				<PublicRoute path="/forgot-password" component={ForgotPasswordPage} exact={true}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;