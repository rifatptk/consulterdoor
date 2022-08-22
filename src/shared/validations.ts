import { ITextInputValidation } from './interfaces';

const NAME_REGEX = /^[a-zA-Z .-]+$/;
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

const memberNameValidation = (memberName: string) => {
  const validResponse: ITextInputValidation = {
    valid: false,
    code: undefined,
  };
  if (!memberName || typeof memberName !== 'string') {
    validResponse.code = 'Invalid name value';
    return validResponse;
  }

  const sanitizeName = memberName;
  const isValidName = NAME_REGEX.test(sanitizeName);
  validResponse.valid = isValidName;
  if (!isValidName) {
    validResponse.code = 'Invalid characters in the name';
  }
  return validResponse;
};

const memberEmailValidation = (memberEmail: string) => {
  const validResponse: ITextInputValidation = {
    valid: false,
    code: undefined,
  };
  if (!memberEmail || typeof memberEmail !== 'string') {
    validResponse.code = 'Invalid email value';
    return validResponse;
  }

  const sanitizeEmail = memberEmail.toLowerCase();
  const isValidEmail = EMAIL_REGEX.test(sanitizeEmail);
  validResponse.valid = isValidEmail;
  if (!isValidEmail) {
    validResponse.code = 'Invalid email';
  }
  return validResponse;
};

const memberPasswordValidation = (memberPassword: string) => {
  const validResponse: ITextInputValidation = {
    valid: false,
    code: undefined,
  };
  if (!memberPassword || typeof memberPassword !== 'string') {
    validResponse.code = 'Invalid password value';
    return validResponse;
  }

  const sanitizePassword = memberPassword;
  const isValidPassword = PASSWORD_REGEX.test(sanitizePassword);
  validResponse.valid = isValidPassword;
  if (!isValidPassword) {
    validResponse.code =
      'Password must be at least 6 characters long and contain at least one number and one letter';
  }
  return validResponse;
};
export {
  memberNameValidation,
  memberEmailValidation,
  memberPasswordValidation,
};
