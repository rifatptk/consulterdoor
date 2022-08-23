import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { AuthSignUpSvg } from '../../../assets/images';
import { AuthService } from '../../../services';
import { Button, BUTTON_TYPES, TextInput } from '../../shared';
import { OTPModal } from './verificationModal';

function SignUpForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      if (password !== passwordConfirm) {
        setIsPasswordMismatch(true);
        return;
      }
      await AuthService.UserSignUp(email, password, firstName, lastname);
      setIsModalOpen(true);
    } catch (error) {
      // console.log('errrror', error);
    }
  };
  const handleToggle = () => {
    setIsModalOpen(false);
  };
  return (
    <Container className="auth-container">
      <Row className="auth-content-container">
        <Col sm={12} lg={8} className="auth-form-container">
          <div className="auth-form-content-container">
            <Row>
              <Col md={6} className="font-bold font-size-large mb-4">
                Input your information
              </Col>
              <Col md={6}>
                <div className="font-bold font-size-regular mb-2 auth-primary-text">
                  Allready a member?
                </div>
                <div className="font-regular font-size-small mb-3">
                  We need you to help us with some basic information for your
                  account creation. Here are our terms and conditins. Please
                  read them carefully.
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3">
                <TextInput
                  name="firstname"
                  type="text"
                  labelText="First Name"
                  rows={1}
                  placeholder="John"
                  onChange={(event) => setFirstName(event.target.value)}
                  maxLength={100}
                  errorLabelClassName="font-regular"
                  className="auth-text-input-container auth-text-container"
                />
              </Col>
              <Col md={1} />
              <Col>
                <TextInput
                  name="lastname"
                  type="text"
                  labelText="Last Name"
                  rows={1}
                  placeholder="Doe"
                  maxLength={100}
                  errorLabelClassName="font-regular"
                  onChange={(event) => setLastName(event.target.value)}
                  className="auth-text-input-container auth-text-container"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mb-3">
                <TextInput
                  name="phone-number"
                  type="tel"
                  labelText="Phone Number"
                  rows={1}
                  placeholder="+94112233445"
                  maxLength={12}
                  errorLabelClassName="font-regular"
                  className="auth-text-input-container auth-text-container"
                />
              </Col>
              <Col md={1} />
              <Col>
                <TextInput
                  name="email"
                  type="email"
                  labelText="Email"
                  rows={1}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="john@email.com"
                  maxLength={100}
                  errorLabelClassName="font-regular"
                  className="auth-text-input-container auth-text-container"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mb-3">
                <TextInput
                  name="password"
                  type="password"
                  labelText="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  rows={1}
                  errorLabelClassName="font-regular"
                  maxLength={100}
                  className="auth-text-input-container auth-text-container"
                />
              </Col>
              <Col md={1} />
              <Col>
                <TextInput
                  name="password"
                  type="password"
                  labelText="Confirm password"
                  rows={1}
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                  maxLength={100}
                  className="auth-text-input-container auth-text-container"
                  errorLabelClassName="font-regular"
                  validation={{
                    isInValid: isPasswordMismatch,
                    validationMsg: 'password mismatch',
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                style={{
                  marginTop: '1rem',
                }}
              >
                <FormGroup check={true}>
                  <Label check={true} className="font-regular font-size-small">
                    <Input type="checkbox" /> I agree with{' '}
                    <Link to="/agreement">terms and conditions</Link>
                  </Label>
                </FormGroup>
              </Col>
              <Col
                md={6}
                style={{
                  display: 'flex',
                  marginTop: '1rem',
                }}
                className="justify-content-md-end"
              >
                <Button
                  type={BUTTON_TYPES.PRIMARY}
                  title="Register"
                  className="auth-button"
                  onClick={handleSubmit}
                />
              </Col>
            </Row>
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
                  Or Register with
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
                className="pt-2 pb-2 mb-3"
                customIcon={<FcGoogle size={20} className="mr-3" />}
              />
            </div>
          </div>
        </Col>
        <Col sm={12} lg={4} className="d-none d-lg-block auth-svg-container">
          <img
            src={AuthSignUpSvg}
            className="auth-signup-svg-background-image"
          />
        </Col>
      </Row>
      <OTPModal
        isModalOpen={isModalOpen}
        email={email}
        password={password}
        handleToggle={handleToggle}
      />
    </Container>
  );
}

export { SignUpForm };
