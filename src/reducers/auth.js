export default (state = {}, action) => {
	switch (action.type) {		
		case 'LOGIN':
			return action.cognitoUserSession;
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
};