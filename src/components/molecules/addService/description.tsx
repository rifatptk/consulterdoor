import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IAddService } from '../../../services/interfaces';
import { Button, BUTTON_TYPES, RichTextEditor, TextLabel } from '../../shared';

interface IProps {
  onClickNext: () => void;
  onClickBack: () => void;
  addServiceInfo?: IAddService;
  setAddServiceInfo: (data: IAddService) => void;
}

const AddServiceDescription: React.FunctionComponent<IProps> = ({
  onClickNext,
  onClickBack,
  addServiceInfo,
  setAddServiceInfo,
}: IProps): JSX.Element => {
  //   const [richText, onTextChange] = React.useState<string>(
  //     addServiceInfo?.description || ''
  //   );
  return (
    <Container className="m-0 p-0">
      <Row>
        <RichTextEditor
          onChangeText={(text) => {
            // onTextChange(text);
            setAddServiceInfo({ description: text });
          }}
          text={addServiceInfo?.description}
        />
      </Row>
      <Row className="mb-5">
        <TextLabel
          text="Consider - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu commodo et ullamcorper sed tincidunt. Massa, in vel senectus viverra ultrices praesent. Fermentum, "
          className="add-service-description-label"
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
            title={'Save & Next'}
            className="stepper-next-button"
            onClick={onClickNext}
          />
        </div>
      </Row>
    </Container>
  );
};

export { AddServiceDescription };
