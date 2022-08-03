import { useEffect, useState } from 'react';
import {
  MdAdd,
  MdModeEdit,
  MdOutlineContentCopy,
  MdRemove,
} from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { Col, Form, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import { consultantService } from '../../../../services';
import { TextInput } from '../../atoms';
interface IQuestion {
  id: string;
  rows: number;
  inputType: InputType;
  maxLength: number;
  label: string;
  actionType?: string;
  value?: string;
}
interface IConsultantQualification {
  description: string;
  end?: string;
  id: number;
  start: string;
  subTitle?: string;
  title: string;
  type: 'EDUCATION' | 'EXPERIENCE';
}

interface IModalProps {
  isModalOpen: boolean;
  handleToggle: () => void;
  handleSubmit: () => void;
  item: IForm;
}

interface IForm {
  id: number;
  name: string;
  questions: IQuestion[];
  isEditable: boolean;
  tags?: {
    id: number;
    title: string;
  }[];
  isSelectableTags?: boolean;
}

interface IProps {
  form: IForm[];
  disabled?: boolean;
  handleModalOpen?: (id: number) => void;
}

interface IQualificationProps {
  qualification: IConsultantQualification;
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
          <div className="font-size-extra-small text-dark-color ml-2">
            Copy Link
          </div>
        </button>
      );
    case COMPONENT_TYPE.VERIFY:
      return (
        <button className="consult-register-text-input-button" type="button">
          <div className="font-size-extra-small text-dark-color">Verify</div>
        </button>
      );
    default:
      return <div />;
  }
};

const ConsultantQualification = ({ qualification }: IQualificationProps) => {
  return (
    <div className="consultant-register-education-container border-gray-color">
      <div className="consultant-register-education-icon-container">
        <FaGraduationCap size={30} />
      </div>
      <div className="consultant-register-qualification-text-container">
        <div className="font-size-regular font-bold mb-1">
          {qualification.title}
        </div>
        <div className="font-size-small font-regular text-dark-color mb-4">
          {qualification.subTitle}
        </div>
        <div className="font-size-extra-small font-regular text-soft-color">
          {new Date(qualification.start).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
          -
          {qualification.end
            ? new Date(qualification.end).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })
            : 'Present'}
        </div>
      </div>
    </div>
  );
};

const SelectedTags = () => {
  const [tags, setTags] = useState([
    'AWS',
    'Frontend dev',
    'serverless',
    'backend dev',
    'teamwork',
    'communication',
  ]);
  const removeTag = (index: number) => {
    const tempTags: string[] = [...tags];
    tempTags.splice(index, 1);
    setTags(tempTags);
  };
  return (
    <Row className="consultant-register-selected-tags-container tag-bg-color">
      {tags.map((tag, index) => (
        <Col className="consultant-register-tag-outline font-size-extra-small">
          <button
            onClick={(event) => {
              event.preventDefault();
              removeTag(index);
            }}
            className="consultant-register-remove-button bg-danger"
          >
            <MdRemove size={15} className="text-light" />
          </button>
          {tag}
        </Col>
      ))}
    </Row>
  );
};

const EducationFormModal = ({
  isModalOpen,
  handleToggle,
  handleSubmit,
  item,
}: IModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      toggle={handleToggle}
      centered={true}
      fullscreen={'sm'}
      size={'lg'}
    >
      <ModalHeader toggle={handleToggle} />
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <div>
            <div className="consult-register-form-container">
              <div className="consult-register-form-header-container">
                <div className="font-regular main-color">{item.name}</div>
              </div>
              <div className="ml-4">
                {item.questions?.map((question) => (
                  <div>
                    <TextInput
                      id={question.id}
                      labelClassName="font-regular mt-4"
                      labelText={question.label}
                      name={question.id}
                      maxLength={question.maxLength}
                      type={question.inputType}
                      rows={question.rows}
                      value={question.value}
                      className="consult-register-text-input text-input-color"
                      containerClassName="text-input-color consultant-register-text-input-container"
                    >
                      <ConsultTextInputButton
                        buttonType={question.actionType}
                      />
                    </TextInput>
                    {item.isSelectableTags && <SelectedTags />}
                  </div>
                ))}
                <Row className="consultant-register-skills-container">
                  {item.tags?.map((tag) => (
                    <Col xs="auto">
                      <button
                        type="button"
                        className="consultant-register-tag tag-bg-color font-medium font-size-small text-dark-color"
                      >
                        {tag.title}
                      </button>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

const ConsultantEducationRegistration = ({ form }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [education, setEducation] = useState<IConsultantQualification[]>();
  const tags = [
    {
      id: 0,
      title: 'Web Design',
    },
    {
      id: 1,
      title: 'Serverless',
    },
    {
      id: 2,
      title: 'Backend dev',
    },
    {
      id: 3,
      title: 'AWS',
    },
    {
      id: 4,
      title: 'Database Design',
    },
  ];
  const handleSubmit = () => {
    console.log('SUBMIT');
  };
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleModalOpen = (id: number) => {
    setModalIndex(id);
    setIsModalOpen(true);
  };
  const getEducations = async () => {
    try {
      const qualifications = await consultantService.getQualifications();
      setEducation(qualifications.educations);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getEducations();
  }, []);
  return (
    <Form>
      <div className="consult-register-form-container">
        <div className="consult-register-form-header-container">
          <div className="font-regular main-color">
            Education profile details
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row' }}
            className="text-dark-color"
          >
            <button
              className="icon-wrapper"
              onClick={() => handleModalOpen(0)}
              type="button"
            >
              <MdAdd size={30} />
            </button>
            <button className="icon-wrapper" type="button">
              <MdModeEdit size={25} />
            </button>
          </div>
        </div>
        <div className="ml-4">
          {education?.map((qualification) => (
            <ConsultantQualification qualification={qualification} />
          ))}
        </div>
      </div>
      <div className="consult-register-form-container">
        <div className="consult-register-form-header-container">
          <div className="font-regular main-color">Skills</div>
          <div
            style={{ display: 'flex', flexDirection: 'row' }}
            className="text-dark-color"
          >
            <button
              className="icon-wrapper"
              onClick={() => handleModalOpen(1)}
              type="button"
            >
              <MdAdd size={30} />
            </button>
            <button className="icon-wrapper" type="button">
              <MdModeEdit size={25} />
            </button>
          </div>
        </div>
        <div className="ml-4">
          <Row className="consultant-register-skills-container">
            {tags?.map((tag) => (
              <Col xs="auto">
                <button
                  type="button"
                  className="consultant-register-tag tag-bg-color font-medium font-size-small text-dark-color"
                >
                  {tag.title}
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <EducationFormModal
        isModalOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        item={form[modalIndex]}
      />
    </Form>
  );
};

export { ConsultantEducationRegistration };
