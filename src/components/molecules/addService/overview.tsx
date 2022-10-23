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
                setAddServiceInfo({ category: item });
              }}
              selectedItem={addServiceInfo?.category}
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
          value={addServiceInfo?.serviceName}
          onChange={(event) =>
            setAddServiceInfo({ serviceName: event.target.value })
          }
        />
      </Row>
      <Row className="mt-4">
        <TextInput
          type="number"
          rows={1}
          placeholder="Add minimum duration of a consultation"
          labelText="Add Minimum Duration(minutes)"
          labelClassName="add-service-input-label"
          value={addServiceInfo?.minDuration?.toString()}
          onChange={(event) =>
            setAddServiceInfo({ minDuration: parseInt(event.target.value, 10) })
          }
        />
      </Row>
      <Row className="mt-4">
        <TextInput
          type="number"
          rows={1}
          placeholder="Add maximum duration of a consultation"
          labelText="Add Maximum Duration(minutes)"
          labelClassName="add-service-input-label"
          value={addServiceInfo?.maxDuration?.toString()}
          onChange={(event) =>
            setAddServiceInfo({ maxDuration: parseInt(event.target.value, 10) })
          }
        />
      </Row>
      <Row className="mt-4">
        <TextInput
          type="number"
          rows={1}
          placeholder="Add consultation fee per hour"
          labelText="Add Consultation Fee (Rs.Per hour)"
          labelClassName="add-service-input-label"
          value={addServiceInfo?.costPerHour?.toString()}
          onChange={(event) =>
            setAddServiceInfo({ costPerHour: parseInt(event.target.value, 10) })
          }
        />
      </Row>
      <Row className="mt-4">
        <TextInput
          type="textarea"
          rows={5}
          labelText="Add Keywords"
          labelClassName="add-service-input-label"
          value={addServiceInfo?.keywords?.join(',')}
          onChange={(event) =>
            setAddServiceInfo({ keywords: event.target.value.split(',') })
          }
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
