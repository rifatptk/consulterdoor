import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

// TODO - Charitha - function names should start with simple letter
function UserSignIn(username: string, password: string) {
  return Auth.signIn(username, password);
}

function UserSignUp(
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
function UserSignOut() {
  return Auth.signOut();
}

function UserValidation(username: string, code: string) {
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
  UserSignIn,
  UserSignOut,
  UserSignUp,
  UserValidation,
  getCurrentAuthenticatedUser,
  resendOtp,
  googleSignIn,
};
