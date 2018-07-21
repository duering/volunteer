import api from '../aws/api';

export const startRead = () => {
	return (dispatch) => {
		api.getData((err, data) => {
			if (err) {
				console.log(err);
			} else {
				dispatch(read(data));
			}
		})
	}
};

export const read = (data) => ({
	type: 'READ_ORG_DATA',
	orgs: data
})