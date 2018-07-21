import cognito from '../aws/cognito';
import request from 'superagent';

// const stage = 'https://73pylr12dj.execute-api.us-east-2.amazonaws.com/dev/';
// const resource = stage + 'compare-yorself';

const stage = 'https://b92rrfa9qa.execute-api.us-east-2.amazonaws.com/dev/';
const resource = stage + 'organization';


const getData = (callback) => {
	cognito.getAuthenticatedUser().getSession((err, session) => {
		if (err) {
			callback(err);
		}
		const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
		request
	  .get(resource)
	  .set('Authorization', session.getIdToken().getJwtToken())
	  .end((error, result) => {
	    if (error) {
	    	callback(error);
	    } else {
	    	callback(null, JSON.parse(result.xhr.response));
	    }
	  });
	});
};

const postData = (data, callback) => {
	cognito.getAuthenticatedUser().getSession((err, session) => {
		if (err) {
			callback(error);
		}
		const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
		request
	  .post(resource)
	  .send(data) 
	  .set('Authorization', session.getIdToken().getJwtToken())
	  .end((error, result) => {
	    if (error) {
	    	callback(error);
	    } else {
	    	callback(null, JSON.parse(result.xhr.response));
	    }
	  });
	});
};

const api = {
	getData,
	postData
};

export default api;
