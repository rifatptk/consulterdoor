import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CompleteSvg } from '../../../assets/images';
import { Button, BUTTON_TYPES, TextLabel } from '../../shared';

interface IProps {
  onClickNext: () => void;
  onClickBack: () => void;
}

const AddServicePublish: React.FunctionComponent<IProps> = ({
  onClickNext,
  onClickBack,
}: IProps): JSX.Element => {
  return (
    <Container className="m-0 p-0">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <img src={CompleteSvg} className="mt-2 publish-image" />
        <TextLabel
          text="Almost there..."
          className="publish-service-main-text mt-4"
        />
        <TextLabel
          text="Let's publish your skill Showcase and get some buyers rolling in."
          className="publish-service-sub-text mb-4"
        />
      </Row>
      <Row className="mt-4">
        <div className="d-flex justify-content-end">
          <Button
            type={BUTTON_TYPES.SECONDARY}
            title={'Back'}
            className="mr-4 stepper-next-button"
            onClick={onClickBack}
          />
          <Button
            type={BUTTON_TYPES.PRIMARY}
            title={'Publish'}
            className="stepper-next-button"
            onClick={onClickNext}
          />
        </div>
      </Row>
    </Container>
  );
};

export { AddServicePublish };
