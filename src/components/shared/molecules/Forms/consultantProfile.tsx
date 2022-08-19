import { useEffect, useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import { Form } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import { consultantService } from '../../../../services';
import { IConsultantDetails } from '../../../../shared/interfaces';
import { Button, BUTTON_TYPES, TextInput } from '../../atoms';

interface IQuestion {
  id: string;
  rows: number;
  inputType: InputType;
  maxLength: number;
  label: string;
  actionType?: string;
  value?: string;
}

interface IForm {
  id: number;
  name: string;
  questions: IQuestion[];
}

interface IProps {
  form: IForm[];
  handleGetProfile: (profile: any) => void;
}

interface ITextInput {
  buttonType?: string;
  isVerified?: boolean;
}

const COMPONENT_TYPE = {
  COPY: 'COPY',
  VERIFY: 'VERIFY',
};

const ConsultTextInputButton = ({ buttonType, isVerified }: ITextInput) => {
  switch (buttonType) {
    case COMPONENT_TYPE.COPY:
      return (
        <button
          className="text-input-button-bg consult-register-text-input-button"
          type="button"
        >
          <MdOutlineContentCopy />
          <div className="font-size-extra-small consult-register-text-title ml-2">
            Copy Link
          </div>
        </button>
      );
    case COMPONENT_TYPE.VERIFY:
      return (
        <button className="consult-register-text-input-button" type="button">
          <div className="font-size-extra-small consult-register-text-title">
            Verify
          </div>
        </button>
      );
    default:
      return <div />;
  }
};

const ConsultantProfileRegistration = ({ form, handleGetProfile }: IProps) => {
  const [profile, setProfile] = useState<IConsultantDetails>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getConsultantProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      changeConsultantForm();
    }
  }, [profile]);
  const getConsultantProfile = async () => {
    try {
      const profileResponse =
        (await consultantService.getConsultantProfile()) as unknown as IConsultantDetails;
      handleGetProfile(profileResponse);
      setProfile(profileResponse);
    } catch (error) {
      return;
    }
  };

  const changeConsultantForm = () => {
    setIsLoading(true);
    form?.forEach((formItem: any) => {
      formItem.questions.forEach((question: any) => {
        switch (question.id) {
          case 'professional-headline':
            question.value = profile?.jobTitle;
            break;
          case 'profile-description':
            question.value = profile?.description;
            break;
          case 'firstname':
            question.value = profile?.firstName;
            break;
          case 'lastname':
            question.value = profile?.lastName;
            break;
          case 'address':
            question.value = profile?.address;
            break;
          case 'phone-number':
            question.value = profile?.phoneNumber;
            break;
          case 'linkedin-url':
            question.value = profile?.linkedinUrl;
            break;
        }
      });
    });
    setIsLoading(false);
  };
  const handleSubmit = async (event?: any) => {
    try {
      event.preventDefault();
      if (!isDisabled) {
        const payload = {
          firstName: event.target.firstname.value,
          lastName: event.target.lastname.value,
          address: event.target.address.value,
          phoneNumber: event.target['phone-number'].value,
          jobTitle: event.target['professional-headline'].value,
          description: event.target['profile-description'].value,
          linkedinUrl: event.target['linkedin-url'].value,
        };
        await consultantService.updateConsultant(payload);
      }
    } catch (error) {
      return;
    }
    setIsDisabled((prev) => !prev);
  };
  if (isLoading) {
    return <h3>LOADING</h3>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="consultant-register-edit-button-container">
        {!isDisabled && (
          <Button
            type={BUTTON_TYPES.SECONDARY}
            onClick={() => {
              changeConsultantForm();
              setIsDisabled(true);
            }}
            title="Cancel"
          />
        )}

        <Button
          type={BUTTON_TYPES.PRIMARY}
          title={isDisabled ? 'Edit' : 'Save'}
          actionType="submit"
        />
      </div>
      {form.map((item, index) => (
        <div key={index} className="consult-register-form-container">
          <div className="consult-register-form-header-container">
            <div className="font-regular main-color">{item.name}</div>
          </div>
          <div className="ml-4">
            {item.questions?.map((question, _index) => (
              <div key={_index}>
                <TextInput
                  disabled={isDisabled}
                  id={question.id}
                  labelClassName="font-regular mt-4"
                  labelText={question.label}
                  name={question.id}
                  maxLength={question.maxLength}
                  type={question.inputType}
                  rows={question.rows}
                  value={question.value}
                  className="consult-register-text-input"
                  containerClassName="consultant-register-text-input-container"
                >
                  <ConsultTextInputButton buttonType={question.actionType} />
                </TextInput>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Form>
  );
};

export { ConsultantProfileRegistration };
