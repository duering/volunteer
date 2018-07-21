import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../aws/api';
import cognito from '../aws/cognito';
import { history } from '../routers/AppRouter';
import { startLogout } from '../actions/auth';

const callabck = (err, res) => {
	if (err) { 
		console.error(err);
	} else {
		console.log(res);
	}
};

const MyPage = (props) => (
	<div>
		<h1>User: {props.username}</h1>
		<h2>name: {props.org.length ? props.org[0].name : 'none'}</h2>
		<p>{props.org.length ? props.org[0].about : 'none'}</p>
		{props.org.length ? <a href={props.org[0].website}>Go to website</a> : null}
		<br/>
		<button onClick={() => {
			api.getData(callabck);
		}}>GET</button>
		<button onClick={() => {		
			api.postData({ age: 40, height: 99, income: 100 }, callabck);
		}}>POST</button>
		<button onClick={() => {		
			props.logout();
			history.push('/');
		}}>LOGOUT</button>
	</div>
);

// name: state.organization.name,
		// about: state.organization.about,
		// website: state.organization.website,

const mapStateToProps = (state) => ({
	username: state.auth.username,
	org: state.organization
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(startLogout())
});


// export default MyPage;
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
