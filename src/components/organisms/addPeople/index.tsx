import { DEFAULT_DATE_FORMAT } from '../../../shared/constant';
import { messages } from '../../../shared/localize';
import {
  TextInput,
  DropZone,
  DatePicker,
  TextLabel,
  Table
} from '../../shared';

function AddPeopleForm() {
  return (
    <div className="mt-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <TextInput
            className="add-people-input mb-2"
            labelText={messages.addPeople.houseNo}
            labelClassName={'add-people-label'}
          />
          <TextInput
            className="add-people-input mb-2 full-name-input"
            labelText={messages.addPeople.fullName}
            labelClassName={'add-people-label'}
            type={'textarea'}
          />
        </div>
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input address-input"
            labelText={messages.addPeople.address}
            labelClassName={'add-people-label'}
            type={'textarea'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <DatePicker
            className="add-people-input mb-2"
            labelText={messages.addPeople.dataOfBirth}
            labelClassName={'add-people-label'}
            format={DEFAULT_DATE_FORMAT}
          />
          <TextInput
            className="add-people-input mb-2"
            labelText={messages.addPeople.age}
            labelClassName={'add-people-label'}
          />
          <TextInput
            className="add-people-input mb-2"
            labelText={messages.addPeople.occupation}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input address-input"
            labelText={messages.addPeople.workingPlaceAddress}
            labelClassName={'add-people-label'}
            type={'textarea'}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input"
            labelText={messages.addPeople.nicNo}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input"
            labelText={messages.addPeople.drivingLicenseNo}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input"
            labelText={messages.addPeople.passportNo}
            labelClassName={'add-people-label'}
          />
        </div>
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input"
            labelText={messages.addPeople.elderlyCardNo}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-2">
          <TextInput
            className="add-people-input"
            labelText={messages.addPeople.mobileNo}
            labelClassName={'add-people-label'}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-2">
          <TextLabel
            className="add-people-label"
            text={messages.addPeople.personImage}
          />
          <DropZone setUploadedFile={(file) => {}} allowMultiple={false} />
        </div>
        <div className="col-md-6 mb-2">
          <TextLabel
            className="add-people-label"
            text={messages.addPeople.nicImage}
          />
          <DropZone setUploadedFile={(file) => {}} allowMultiple={false} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
          <TextLabel
            className="add-people-drop-label"
            text={messages.addPeople.drivingLicenseImage}
          />
          <DropZone setUploadedFile={(file) => {}} allowMultiple={false} />
        </div>
        <div className="col-md-6 mb-2">
          <TextLabel
            className="add-people-label"
            text={messages.addPeople.passportImage}
          />
          <DropZone setUploadedFile={(file) => {}} allowMultiple={false} />
        </div>
      </div>
    </div>
  );
}

export { AddPeopleForm };
