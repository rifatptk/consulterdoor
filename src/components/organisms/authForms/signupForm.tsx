import { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import {
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap';
import { AuthSignUpSvg } from '../../../assets/images';
import { AuthService } from '../../../services';
import { Button, BUTTON_TYPES, TextInput } from '../../shared';

interface IOtpModalProps {
  handleToggle?: () => void;
  isModalOpen: boolean;
  email: string;
  disabled?: boolean;
  password: string;
}
const OTP_LENGTH = 6;
const KEY_BACKSPACE = 8;
const KEY_DELETE = 46;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

const OTPModal = ({
  disabled = false,
  handleToggle,
  isModalOpen,
  email,
  password,
}: IOtpModalProps) => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const submitHandler = async (value: string) => {
    try {
      console.log('AUTHHH');
      await AuthService.UserValidation(email, value);
      await AuthService.UserSignIn(email, password);
      navigate('/');
    } catch (error) {
      // console.log('errr', error);
    }
  };

  const inputRefs = useMemo(() => {
    const refs = [];
    for (let i = 0; i < OTP_LENGTH; i++) {
      refs.push(createRef<HTMLInputElement>());
    }

    return refs;
  }, undefined);
  useEffect(() => {
    if (isModalOpen) { focusInputByIndex(0); }
  }, [isModalOpen]);
  const focusInputByIndex = useCallback(
    (index) => {
      if (inputRefs[index].current) {
        inputRefs[index].current!.focus();
        inputRefs[index].current!.selectionStart = 1;
      }
    },
    [inputRefs]
  );
  const handleChange = useCallback(
    (e, index) => {
      setHasError(false);
      const inputValue = inputRefs[index].current!.value.replace(/\D/g, '');
      let charIndex = 0;
      let currentIndex = index;
      for (; currentIndex < OTP_LENGTH; currentIndex++) {
        if (inputValue[charIndex]) {
          inputRefs[currentIndex].current!.value = inputValue[charIndex];
          charIndex++;
        } else {
          inputRefs[currentIndex].current!.value = '';
          break;
        }
      }

      if (currentIndex >= OTP_LENGTH) {
        currentIndex = OTP_LENGTH - 1;
      }
      focusInputByIndex(currentIndex);

      let finalValue = '';
      inputRefs.forEach((ref) => {
        finalValue += ref.current!.value;
      });

      if (finalValue.length === OTP_LENGTH) {
        submitHandler(finalValue);
      }
    },
    [focusInputByIndex, inputRefs, submitHandler]
  );
  const handleKeyUp = useCallback(
    (e, index) => {
      if (e.keyCode === KEY_BACKSPACE || e.keyCode === KEY_DELETE) {
        inputRefs[index].current!.value = '';
        const previousIndex = index > 1 ? index - 1 : 0;
        focusInputByIndex(previousIndex);
      } else if (e.keyCode === KEY_LEFT_ARROW) {
        if (index > 0) {
          focusInputByIndex(index - 1);
        }
      } else if (e.keyCode === KEY_RIGHT_ARROW) {
        if (index < OTP_LENGTH - 1) {
          focusInputByIndex(index + 1);
        }
      }
    },
    [focusInputByIndex, inputRefs]
  );
  return (
    <Modal
      isOpen={isModalOpen}
      toggle={handleToggle}
      centered={true}
      fullscreen={'sm'}
      backdrop="static"
    >
      <ModalBody style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="m-2">
          <div className="font-bold font-size-medium mb-2">
            OTP Verification
          </div>
          <div className="font-regular font-size-small mb-1 secondary-text-color">
            A 6 digit OTP has sent via email to verify you email!
          </div>
          <div className="font-regular font-size-small mb-1 secondary-text-color">
            Enter the OTP you recieved to
          </div>
          <div className="font-regular font-size-small">{email}</div>
          <div className="otp-inputs-container mt-4">
            {inputRefs.map((ref, index) => (
              <input
                autoFocus={index === 0}
                disabled={disabled}
                key={'otp' + index}
                defaultValue=""
                ref={ref}
                className={hasError ? 'otp-error' : ''}
                onChange={(e) => handleChange(e, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                type="tel"
              />
            ))}
          </div>
          <button className="font-regular font-size-small text-blue-color mt-3 mb-4">
            Resend OTP
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

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
                <div className="font-bold font-size-regular mb-2 text-blue-color">
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
