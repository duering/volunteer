import cognito from '../aws/cognito';

export const login = (username) => ({
	type: 'LOGIN',
	username
});

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogin = (username, password) => {
	return (dispatch) => {
		cognito.signIn(username, password, {
	    onSuccess: function (result) {
	    	dispatch(login(username));
	      console.log(result);
	    },
	    onFailure: function(err) {
	      console.error(err);
	    }
	  });
	};
};

export const startLogout = () => {
	return (dispatch) => {
		cognito.signOut();
		dispatch(logout());
	}
};