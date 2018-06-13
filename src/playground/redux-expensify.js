import  { createStore, combineReducers } from 'redux';
import  uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ((
	{ 
		description = '', 
		note = '', 
		amount = 0, 
		createdAt = 0 
	} = {} 
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
}));

// REMOVE_EXPENSE
const removeExpense = (({ id = undefined } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
}));

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});


// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date = undefined) => ({
	type: 'SET_START_DATE',
	date
})
// SET_END_DATE
const setEndDate = (date = undefined) => ({
	type: 'SET_END_DATE',
	date
})

// Expanses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id != action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => (expense.id === action.id) ? 
				{ ...expense, ...action.updates } : expense);
		default:
			return state;
	}
};

// Filters Reducer

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {...state, text: action.text};
		case 'SORT_BY_DATE':
			return {...state, sortBy: 'date'};
		case 'SORT_BY_AMOUNT':
			return {...state, sortBy: 'amount'};
		case 'SET_START_DATE':
			return {...state, startDate: action.date};
		case 'SET_END_DATE':
			return {...state, endDate: action.date};
		default:
			return state;
	}	
};


// timestamps

		// id: 'aadwhjiowec',
		// description: 'January Rent',
		// note: 'This was the final payment',
		// amount: 54500, //cents
		// createdAt: 0 //timestamp

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter(({ description, createdAt }) => {
		const startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || createdAt <= endDate;
		const textMatch = description.toLowerCase().includes(text.toLowerCase());
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		switch (sortBy) {
			case 'date':
				return a.createdAt < b.createdAt ? 1 : -1;
			case 'amount':
				return a.amount < b.amount ? 1 : -1;
			default:
				return 0;
		}
	})
};

// Store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({	description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({	description: 'Coffee', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));

const demoState = {
	expenses: [{
		id: 'aadwhjiowec',
		description: 'January Rent',
		note: 'This was the final payment',
		amount: 54500, //cents
		createdAt: 0 //timestamp
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};

// description: 'January Rent',
// note: 'This was the final payment',
// amount: 54500, //cents
// createdAt: 0 //timestamp




// Example for transform-object-rest-spread

// const user = {
// 	name: 'Jen',
// 	age: 24
// }

// console.log(user);
// console.log({
// 	...user,
// 	location: 'philadelphia',
// 	age: 27
// })
