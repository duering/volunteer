import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpense from '../selectors/expenses';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpense(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: getExpensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpenseSummary);