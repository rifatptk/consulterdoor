import { useState } from 'react';
import { InputType } from 'reactstrap/types/lib/Input';
import { ConsultantProfileImage } from '../../components';
import { PageContainer } from '../../components/shared';
import { ConsultantProfileRegistration } from '../../components/shared/molecules';
import { ConsultantEducationRegistration } from '../../components/shared/molecules';
import ConsultantProfile from './consultantProfile.json';

interface ICategory {
  item: string;
}

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

interface IQualification {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  start: string;
  end: string;
}

interface IForm {
  id: number;
  name: string;
  questions: IQuestion[];
  isEditable: boolean;
  qualifications?: IQualification[];
  isSelectableTags?: boolean;
  tags?: {
    id: number;
    title: string;
  }[];
}

const REGISTRATION_CATEGORIES = {
  PROFILE: 'Profile',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  SERVICE: 'Service',
  CERTIFICATION: 'Certifications',
  ACCOUNTS: 'Accounts',
};

const ConsultantRegister = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Profile');
  const [profile, setProfile] = useState<any>({});

  const consultantRegistrationForm = (
    handleGetProfile: (profile: any) => void
  ) => {
    switch (selectedCategory) {
      case REGISTRATION_CATEGORIES.PROFILE:
        return (
          <ConsultantProfileRegistration
            form={ConsultantProfile.form as IForm[]}
            handleGetProfile={handleGetProfile}
          />
        );
      case REGISTRATION_CATEGORIES.EDUCATION:
        return <ConsultantEducationRegistration />;
      default:
        console.log('DEFAULT', selectedCategory);
        return <div>Coming soon</div>;
    }
  };

  const ConsultRegisterCategory = ({ item }: ICategory) => {
    return (
      <button
        onClick={() =>
          setSelectedCategory(
            REGISTRATION_CATEGORIES[
              item as keyof typeof REGISTRATION_CATEGORIES
            ]
          )
        }
        className="consultant-register-category"
        type="button"
      >
        {selectedCategory ===
          REGISTRATION_CATEGORIES[
            item as keyof typeof REGISTRATION_CATEGORIES
          ] && <div className="consultant-register-category-selected" />}
        <div>
          {
            REGISTRATION_CATEGORIES[
              item as keyof typeof REGISTRATION_CATEGORIES
            ]
          }
        </div>
      </button>
    );
  };
  const handleGetProfile = (profile: any) => {
    setProfile(profile);
  };
  return (
    <PageContainer className="remove-margin-padding">
      <div className="consultant-register-screen-container">
        <div className="consultant-register-category-container">
          <ConsultantProfileImage data={profile} />
          {Object.keys(REGISTRATION_CATEGORIES).map((item, index) => {
            return <ConsultRegisterCategory key={index} item={item} />;
          })}
        </div>
        <div className="consultant-register-form-container font-medium">
          {consultantRegistrationForm(handleGetProfile)}
        </div>
      </div>
    </PageContainer>
  );
};

export { ConsultantRegister };
