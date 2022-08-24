import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdKey, IoMdPerson } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import {
  AuthLoginBackgroundSvg,
  AuthLoginPersonSvg,
} from '../../../assets/images';
import { AuthService } from '../../../services';
import { googleSignIn, resendOtp } from '../../../services/auth/authProvider';
import { OTPModal } from './verificationModal';

import { ITextInputValidation } from '../../../shared/interfaces';
import { memberEmailValidation } from '../../../shared/validations';
import { Button, BUTTON_TYPES, TextInput } from '../../shared';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [noUser, setNoUser] = useState<boolean>(false);
  const [emailValidation, setEmailValidation] = useState<ITextInputValidation>({
    valid: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      setEmailValidation({ valid: true });
      setNoUser(false);
      const emailValidationResponse = memberEmailValidation(userName);
      if (!emailValidationResponse.valid) {
        setEmailValidation(emailValidationResponse);
        return;
      }
      await AuthService.userSignIn(userName, password);
      navigate('/');
    } catch (error: any) {
      if (error.code === 'UserNotConfirmedException') {
        await resendOtp(userName);
        setIsModalOpen(true);
      } else if (
        error.code === 'UserNotFoundException' ||
        error.code === 'NotAuthorizedException'
      ) {
        setNoUser(true);
      }
    }
  };

  const federatedSignin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      return;
    }
  };
  return (
    <Container className="auth-container">
      <Row className="auth-content-container">
        <Col sm={12} lg={5} className="auth-form-container">
          <div className="auth-form-content-container">
            <div className="font-bold font-size-large mb-4">Log in</div>
            <div className="font-regular font-size-small mb-3">
              Please input your information in the fields below to enter your
              Journey platform.
            </div>
            <div>
              <TextInput
                name="email"
                type="email"
                rows={1}
                placeholder="Email"
                maxLength={100}
                onChange={(event) => setUserName(event.target.value)}
                className="auth-text-container"
                containerClassName="auth-text-input-container"
                errorLabelClassName="font-size-small"
                validation={{
                  isInValid: !emailValidation?.valid || false,
                  validationMsg: emailValidation?.code,
                }}
                icon={<IoMdPerson className="icon-dark-color" size={20} />}
              />
              <TextInput
                name="password"
                type="password"
                rows={1}
                placeholder="Password"
                icon={<IoMdKey className="icon-dark-color" size={20} />}
                maxLength={100}
                onChange={(event) => setPassword(event.target.value)}
                containerClassName="auth-text-input-container"
                errorLabelClassName="font-size-small"
                validation={{
                  isInValid: noUser,
                  validationMsg:
                    'The username or password you entered is incorrect.',
                }}
                className="auth-text-container"
              />
            </div>
            <div
              className="mt-4"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <FormGroup check={true}>
                <Label check={true} className="font-regular font-size-small">
                  <Input type="checkbox" /> Remember me{' '}
                </Label>
              </FormGroup>
              <button className="font-regular font-size-extra-small auth-primary-text">
                Forgot your password?
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '1rem',
              }}
            >
              <Button
                type={BUTTON_TYPES.PRIMARY}
                title="Login"
                className="auth-button"
                onClick={handleSubmit}
              />
            </div>
            <div className="mt-3">
              <Row>
                <Col className="dashed-border" />
                <Col
                  sm={'auto'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '2rem',
                  }}
                  className="font-regular font-size-extra-small secondary-text-color"
                >
                  Or Login with
                </Col>
                <Col className="dashed-border" />
              </Row>
            </div>
            <div
              className="mt-3"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                type={BUTTON_TYPES.ELEVATED}
                title="Google"
                className="pt-2 pb-2"
                onClick={federatedSignin}
                customIcon={<FcGoogle size={20} className="mr-3" />}
              />
            </div>
            <div className="mt-4 font-regular font-size-small secondary-text-color text-center">
              Don't have an account yet?
            </div>
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Link
                to="/auth/signup"
                style={{ textDecoration: 'none' }}
                className="mt-1 font-regular font-size-small auth-primary-text"
              >
                Register
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={7} className="d-none d-lg-block auth-svg-container">
          <img
            src={AuthLoginBackgroundSvg}
            className="auth-login-svg-background-image"
          />
          <img
            src={AuthLoginPersonSvg}
            className="auth-login-svg-person-image"
          />
        </Col>
      </Row>
      <OTPModal
        isModalOpen={isModalOpen}
        email={userName}
        password={password}
        handleToggle={handleToggle}
      />
    </Container>
  );
}

export { LoginForm };
