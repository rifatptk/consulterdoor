import * as React from 'react';
import { Container, Row } from 'react-bootstrap';

interface IStep {
  title?: string;
  content?: React.ReactElement;
  key: string;
}
interface IProps {
  steps: IStep[];
  selectedItemKey?: string;
  stepperContainerClassName?: string;
}

interface IHeaderProps {
  steps: IStep[];
  selectedItemKey?: string;
}

const Stepper: React.FunctionComponent<IProps> = React.memo(
  ({
    steps,
    selectedItemKey,
    stepperContainerClassName,
  }: IProps): JSX.Element => {
    return (
      <div>
        <StepperHeader steps={steps} selectedItemKey={selectedItemKey} />
        <div className={`${stepperContainerClassName}`}>
          {steps.map((step) => {
            if (step.key === selectedItemKey) {
              return <StepperContainer children={step.content} />;
            }
          })}
        </div>
      </div>
    );
  }
);

const StepperHeader: React.FunctionComponent<IHeaderProps> = React.memo(
  ({ steps, selectedItemKey }: IHeaderProps): JSX.Element => {
    let isSelectedKeyPassed = false;
    return (
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            {steps.map((step, index) => {
              if (step.key === selectedItemKey) {
                isSelectedKeyPassed = true;
              }
              return (
                <>
                  {!!index && <div className="col  stepper-line " />}
                  <div className="d-flex row  justify-content-center m-0 p-0">
                    <div
                      className={`d-flex align-items-center justify-content-center stepper-circle ${
                        !isSelectedKeyPassed || step.key === selectedItemKey
                          ? 'stepper-active'
                          : ''
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="d-flex align-items-center justify-content-center stepper-title">
                      {step.title}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Row>
      </Container>
    );
  }
);

const StepperContainer: React.FunctionComponent = React.memo(
  ({ children }): JSX.Element => {
    return <Container>{children}</Container>;
  }
);

export { Stepper };
