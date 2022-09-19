import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IAddService, IAddServiceMetaData } from '../../../services/interfaces';
import {
  Button,
  BUTTON_TYPES,
  Dropdown,
  TextInput,
  TextLabel,
} from '../../shared';

interface IProps {
  onClickNext: () => void;
  addServiceInfo?: IAddService;
  setAddServiceInfo: (data: IAddService) => void;
  addServiceMetaData: IAddServiceMetaData;
}

const AddServiceOverview: React.FunctionComponent<IProps> = ({
  onClickNext,
  addServiceInfo,
  setAddServiceInfo,
  addServiceMetaData,
}: IProps): JSX.Element => {
  return (
    <Container className="m-0 p-0">
      <Row>
        <TextLabel text="Select Category" className="add-service-input-label" />
      </Row>
      <Row>
        <Col>
          <div className="add-service-category-dropdown-container">
            <Dropdown
              selections={addServiceMetaData.mainCategories}
              onItemClick={(item) => {
                setAddServiceInfo({ mainCategory: item });
              }}
              selectedItem={addServiceInfo?.mainCategory}
              placeholder={'Main Category'}
              className="add-service-category-dropdown"
              dropdownMenuClassName="add-service-category-dropdown-menu"
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <TextInput
          type="textarea"
          rows={3}
          placeholder="It will appier for your clients. Make it attractively"
          labelText="Add Title"
          labelClassName="add-service-input-label"
          value={addServiceInfo?.title}
          onChange={(event) => setAddServiceInfo({ title: event.target.value })}
        />
      </Row>
      <Row className="mt-4">
        <TextInput
          type="textarea"
          rows={5}
          labelText="Add Keywords"
          labelClassName="add-service-input-label"
        />
      </Row>
      <Row className="mt-4">
        <div className="d-flex justify-content-end">
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

export { AddServiceOverview };
