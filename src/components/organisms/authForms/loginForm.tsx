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
import { OTPModal } from './verificationModal';
import { googleSignIn, resendOtp } from '../../../services/auth/authProvider';

import { Button, BUTTON_TYPES, TextInput } from '../../shared';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      await AuthService.UserSignIn(userName, password);
      navigate('/');
    } catch (error: any) {
      if (error.code === 'UserNotConfirmedException') {
        await resendOtp(userName);
        setIsModalOpen(true);
      }
    }
  };

  const federatedSignin = async () => {
    try {
      console.log('FEDDEEE');
      await googleSignIn();
    } catch (error) {
      console.log('eorror', error);
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
                icon={<IoMdPerson className="text-dark-color" size={20} />}
              />
              <TextInput
                name="password"
                type="password"
                rows={1}
                placeholder="Password"
                icon={<IoMdKey className="text-dark-color" size={20} />}
                maxLength={100}
                onChange={(event) => setPassword(event.target.value)}
                containerClassName="auth-text-input-container"
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
              <button className="font-regular font-size-extra-small text-blue-color">
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
                className="mt-1 font-regular font-size-small text-blue-color"
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
