import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../aws/api';

const callabck = (err, res) => {
	if (err) { 
		console.error(err);
	} else {
		console.log(res);
	}
};

const MyPage = (props) => (
	<div>
		<button onClick={() => {
			api.getData(callabck);
		}}>GET</button>
		<button onClick={() => {		
			api.postData({ age: 40, height: 99, income: 100 }, callabck);
		}}>POST</button>
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: startRead()
	};
};



export default MyPage;
// connect(mapStateToProps)(MyPage);
