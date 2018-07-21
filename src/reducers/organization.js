const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {		
		case 'READ_ORG_DATA':
			return action.orgs;
		default:
			return state;
	}
};