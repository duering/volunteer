import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<div>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br />
		<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br />
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		<button onClick={startLogout}>Logout</button>
	</div>
);

const mapDispathToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispathToProps)(Header);