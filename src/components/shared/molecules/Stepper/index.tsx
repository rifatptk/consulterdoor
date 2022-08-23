import * as React from 'react';
import { Container, Row } from 'react-bootstrap';

const Stepper: React.FunctionComponent<any> = React.memo(
  ({}: any): JSX.Element => {
    return (
      <div>
        <StepperHeader />
        <div className="stepper-container">
          <StepperContainer />
        </div>
      </div>
    );
  }
);

const StepperHeader: React.FunctionComponent<any> = React.memo(
  ({}: any): JSX.Element => {
    return (
      <Container>
        <Row>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-center stepper-circle">
              1
            </div>
            <div
              style={{
                background: 'red',
                height: 5,
                width: 'auto',
              }}
              className="col"
            />
            <div
              style={{
                height: 80,
                width: 80,
                background: 'red',
                borderRadius: 40,
              }}
              className="d-flex align-items-center justify-content-center"
            >
              2
            </div>
            <div
              style={{
                background: 'red',
                height: 5,
              }}
              className="col"
            />
            <div
              style={{
                height: 80,
                width: 80,
                background: 'red',
                borderRadius: 40,
              }}
              className="d-flex align-items-center justify-content-center"
            >
              3
            </div>
          </div>
        </Row>
      </Container>
    );
  }
);

const StepperContainer: React.FunctionComponent<any> = React.memo(
  ({}: any): JSX.Element => {
    return (
      <Container>
        <div>Test me</div>
      </Container>
    );
  }
);

export { Stepper };
