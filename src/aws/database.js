import cognito from '../aws/cognito';
import request from 'superagent';

const getData = () => {
	cognito.getAuthenticatedUser().getSession((err, session) => {
		if (err) {
			callback(err);
		}
		const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
		request
	  .get('https://73pylr12dj.execute-api.us-east-2.amazonaws.com/dev/compare-yorself/single' + queryParam)
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
			callback(err);
		}
		const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken();
		request
	  .post('https://73pylr12dj.execute-api.us-east-2.amazonaws.com/dev/compare-yorself')
	  .send(data) 
	  .set('Authorization', session.getIdToken().getJwtToken())
	  .end(callback);
	});
};

const database = {
	getData,
	postData
};

export default database;
