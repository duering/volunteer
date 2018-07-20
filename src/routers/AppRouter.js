import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import MyPage from '../components/MyPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';


export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>			
				<Route path="/" component={LoginPage} exact={true}/>
				<Route path="/register" component={RegisterPage} exact={true}/>
				<Route path="/dashboard" component={MyPage} exact={true}/>
				<Route path="/forgot-password" component={ForgotPasswordPage} exact={true}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;