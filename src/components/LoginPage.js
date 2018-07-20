import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';
import Cognito from '../aws/cognito';
import NotFoundPage from '../components/NotFoundPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import { history } from '../routers/AppRouter';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}	
	onUsernameChange = (e) => {
		const username = e.target.value;
		this.setState(() => ({ username }));
	};
	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		Cognito.signIn(this.state.username, this.state.password, {
	    onSuccess: function (result) {
	      console.log(result);
	      history.push('/Dashboard');
	    },
	    onFailure: function(err) {
	      console.error(err);
	    }
	  });
	};
	render() {
		return (
			<div className="box-layout">
				<div className="box-layout__box">
					<form className="form" onSubmit={this.onSubmit}>
						<span>
							Login
						</span>

						<div>
							<span>Username</span>
							<input 
								type="text" 
								name="username" 
								placeholder="Type your username" 
								value={this.state.username}
								onChange={this.onUsernameChange}
							/>
							<span data-symbol="&#xf206;"></span>
						</div>

						<div>
							<span>Password</span>
							<input 
								type="password" 
								name="password" 
								placeholder="Type your password" 
								value={this.state.password}
								onChange={this.onPasswordChange}
							/>
							<span data-symbol="&#xf190;"></span>
						</div>
						
						<div>
							<button>Login</button>
						</div>

						<Link to="/forgot-password">
							Forgot password?
						</Link>

						<div>
							<span>Don't you have an account yet?</span>
							<Link to="/register">
								Sign Up
							</Link>
						</div>
						
					</form>
				</div>
			</div>
		);
	}
}

const mapDispathToProps = (dispatch) => ({
	startLogin: (username, password) => dispatch(startLogin(username, password))
});

export default LoginPage;
// export default connect(undefined, mapDispathToProps)(LoginPage);