import { FcGoogle } from 'react-icons/fc';
import { IoMdKey, IoMdPerson } from 'react-icons/io';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { AuthSignUpSvg } from '../../../assets/images';
import { Button, BUTTON_TYPES, TextInput } from '../../shared';

function SignUpForm() {
  return (
    <Container className="auth-container">
      <Row className="auth-content-container">
        <Col sm={12} lg={8} className="auth-form-container">
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
              <FormGroup check>
                <Label check className="font-regular font-size-small">
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
                customIcon={<FcGoogle size={20} className="mr-3" />}
              />
            </div>
            <div className="mt-4 font-regular font-size-small secondary-text-color text-center">
              Don't have an account yet?
            </div>
            <div className="mt-1 font-regular font-size-small text-blue-color text-center">
              Register
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
    </Container>
  );
}

export { SignUpForm };
