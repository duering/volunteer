import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoSession
} from 'amazon-cognito-identity-js';


const POOL_DATA = {
  // OPTIONAL - Amazon Cognito User Pool ID
  UserPoolId: process.env.COGNITO_USER_POOL_ID,

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  ClientId: process.env.COGNITO_WEB_CLIENT_ID,
};

const userPool = new CognitoUserPool(POOL_DATA);

const signIn = (username, password, callback) => {
  const authData = {
    Username: username,
    Password: password
  };
  const authDetails = new AuthenticationDetails(authData);
  const userData = {
    Username: username,
    Pool: userPool
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authDetails, callback);
};

const getAuthenticatedUser = () => {
  return userPool.getCurrentUser();
};

const logout = () => {
  this.getAuthenticatedUser().signOut();
};

const cognito = {
  signIn,
  logout,
  getAuthenticatedUser
};

export default cognito;