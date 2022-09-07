import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

// TODO - Charitha - function names should start with simple letter
function userSignIn(username: string, password: string) {
  return Auth.signIn(username, password);
}

function userSignUp(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email: username,
      given_name: firstName,
      family_name: lastName,
    },
    validationData: [],
  });
}
function userSignOut() {
  return Auth.signOut();
}

function userValidation(username: string, code: string) {
  return Auth.confirmSignUp(username, code);
}

function getCurrentAuthenticatedUser() {
  return Auth.currentAuthenticatedUser({
    bypassCache: false,
  });
}

function resendOtp(userName: string) {
  return Auth.resendSignUp(userName);
}

function googleSignIn() {
  return Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google,
  });
}

export {
  userSignIn,
  userSignOut,
  userSignUp,
  userValidation,
  getCurrentAuthenticatedUser,
  resendOtp,
  googleSignIn,
};
