import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}><h3>{description}</h3></Link>
		<p>
		Amount: {numeral(amount).format('$0,0.00')}, 
		Created At: {moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;