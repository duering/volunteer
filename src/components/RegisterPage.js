import React from 'react'
import { connect } from 'react-redux';

const RegisterPage = () => (

		
			<form className="form">
				<span>
					Register
				</span>

				<div>
					<span>Username</span>
					<input type="text" name="username" placeholder="Type your username" />
					<span data-symbol="&#xf206;"></span>
				</div>

				<div>
					<span>Password</span>
					<input type="password" name="password" placeholder="Type your password" />
					<span data-symbol="&#xf190;"></span>
				</div>
				
				<div>
					<span>Confirm Password</span>
					<input type="password" name="password" placeholder="Type your password" />
					<span data-symbol="&#xf190;"></span>
				</div>

				<div>
					<button>
						Register
					</button>
				</div>
				
			</form>
	
);

export default RegisterPage;