import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdAdd, MdModeEdit, MdRemove } from 'react-icons/md';
import Select from 'react-select';
import {
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import { consultantService } from '../../../../services';
import {
  createQualification,
  updateQualification,
} from '../../../../services/consultant/consultantService';
import { IConsultantQualification } from '../../../../services/interfaces';
import { getMonthName } from '../../../../shared/utils';
import { Button, BUTTON_TYPES, TextInput } from '../../atoms';

interface IModalProps {
  isModalOpen: boolean;
  handleToggle: (event?: any) => void;
  handleSubmit?: (e: any) => void;
  qualification: IConsultantQualification;
  type?: 'CREATE' | 'EDIT';
}

interface ITagsProp {
  defaultTags: string[];
  removeTag: (index: number) => void;
}

interface IQualificationProps {
  qualification: IConsultantQualification;
}

const getYearList = () => {
  const currentYear = new Date().getFullYear();
  const options = [];
  let startYear = 1900;
  while (startYear <= currentYear) {
    options.push({ value: startYear, label: startYear });
    startYear++;
  }
  return options;
};

const getMonths = () => {
  // TODO - Charitha - move to shared folder
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const options = [];
  for (const mon of months) {
    options.push({ value: mon, label: mon });
  }
  return options;
};

const ConsultantQualification = ({ qualification }: IQualificationProps) => {
  const [isEditQualification, setIsEditQualification] =
    useState<boolean>(false);
  const handleEditQualification = (event: any) => {
    event.preventDefault();
    setIsEditQualification(true);
  };

  const handleToggle = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditQualification((prev) => !prev);
  };
  return (
    <div className="consultant-register-education-container">
      <div className="consultant-register-qualification-container">
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
            {new Date(qualification.start || '').toLocaleDateString('en-US', {
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
      <div>
        <button
          className="icon-wrapper"
          type="button"
          onClick={handleEditQualification}
        >
          <MdModeEdit size={25} />
        </button>
      </div>
      <EducationFormModal
        isModalOpen={isEditQualification}
        handleToggle={handleToggle}
        qualification={qualification}
        type="EDIT"
      />
    </div>
  );
};

const SelectedTags = ({ defaultTags, removeTag }: ITagsProp) => {
  return (
    <Row className="consultant-register-selected-tags-container">
      {defaultTags.map((tag, index) => (
        <Col className="consultant-register-tag-outline font-size-extra-small">
          <button
            onClick={(event) => {
              event.preventDefault();
              removeTag(index);
            }}
            type="button"
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
const SkillFormModal = ({
  isModalOpen,
  qualification,
  handleToggle,
}: IModalProps) => {
  const [skill, setSkill] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const removeTag = (index: number) => {
    const tempTags: string[] = [...tags];
    tempTags.splice(index, 1);
    setTags(tempTags);
  };
  const handleKeyAdd = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const tempTags: string[] = [...tags];
      tempTags.push(skill);
      setTags(tempTags);
      setSkill('');
    }
  };
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
        <Form>
          <div>
            <div className="consult-register-form-container">
              <div className="consult-register-form-header-container">
                <div className="font-regular main-color">Add skills</div>
              </div>
              <TextInput
                labelClassName="font-regular mt-4"
                labelText="Skill"
                name="skills"
                type="text"
                rows={1}
                placeholder="Eg: Finance"
                onChange={(event) => setSkill(event.target.value)}
                maxLength={100}
                value={skill}
                onKeyDown={handleKeyAdd}
                className="consult-register-text-input"
                containerClassName=" consultant-register-text-input-container"
              />
              <div>
                <SelectedTags defaultTags={tags} removeTag={removeTag} />
              </div>
            </div>
            <div className="consultant-register-submit-button-container">
              <Button
                type={BUTTON_TYPES.SECONDARY}
                onClick={handleToggle}
                title="Cancel"
              />
              <Button
                type={BUTTON_TYPES.PRIMARY}
                title={'Submit'}
                actionType="submit"
              />
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

const EducationFormModal = ({
  isModalOpen,
  handleToggle,
  qualification,
  type,
}: IModalProps) => {
  const [isEndDate, setIsEndDate] = useState<boolean>(false);
  const [startYear, setStartYear] = useState<any>();
  const [startMonth, setStartMonth] = useState<any>();
  const [endYear, setEndYear] = useState<any>();
  const [endMonth, setEndMonth] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [subTitle, setSubTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const startDate = `${startYear}-${startMonth}`;
      const endDate = endYear && `${endYear}-${endMonth}`;
      console.log('startDate', event.target['select-start-year']);
      if (!startYear || !startMonth || !title || !subTitle) {
        // Show Errors
        return;
      }
      const payload: IConsultantQualification = {
        description,
        end: isEndDate && endDate && new Date(endDate).toDateString(),
        id: qualification.id,
        start: startDate && new Date(startDate || '').toDateString(),
        subTitle,
        title,
        type: 'EDUCATION',
      };
      console.log(payload);
      if (type === 'EDIT') {
        await updateQualification(payload);
      } else {
        await createQualification(payload);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
    handleToggle();
  };
  useEffect(() => {
    setIsEndDate(qualification.end ? true : false);
    setTitle(qualification.title);
    setSubTitle(qualification.subTitle);
    setDescription(qualification.description);
    setStartYear(
      qualification.start &&
        new Date(qualification.start).getFullYear().toString()
    );
    setStartMonth(getMonthName(new Date(qualification.start || '').getMonth()));
    setEndYear(
      qualification.end && new Date(qualification.end).getFullYear().toString()
    );
    setEndMonth(getMonthName(new Date(qualification.end || '').getMonth()));
  }, [qualification]);
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
        <Form>
          <div>
            <div className="consult-register-form-container">
              <div className="consult-register-form-header-container">
                <div className="font-regular main-color">
                  Add Education Details
                </div>
              </div>
              <div className="ml-4">
                <TextInput
                  labelClassName="font-regular mt-4"
                  labelText="School/University"
                  name="school"
                  type="text"
                  rows={1}
                  maxLength={100}
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                  className="consult-register-text-input"
                  containerClassName="consultant-register-text-input-container"
                />
                <TextInput
                  labelClassName="font-regular mt-4"
                  labelText="Degree"
                  name="degree"
                  type="text"
                  rows={1}
                  onChange={(event) => setSubTitle(event.target.value)}
                  maxLength={100}
                  value={subTitle}
                  className="consult-register-text-input"
                  containerClassName="consultant-register-text-input-container"
                />
                <div className="mt-4 ml-3">
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      setIsEndDate(!e.target.checked);
                    }}
                    defaultChecked={!isEndDate}
                  />
                  <Label className="font-regular ml-2">
                    I'm currently studying
                  </Label>
                </div>
                <Label className="font-regular mt-4">Start Date</Label>
                <Row>
                  <Col>
                    <Select
                      inputId="select-start-year"
                      placeholder="Year"
                      options={getYearList()}
                      onChange={(option) => setStartYear(option?.value)}
                      defaultInputValue={startYear}
                      className="mr-1"
                    />
                  </Col>
                  <Col>
                    <Select
                      inputId="select-start-month"
                      placeholder="Month"
                      options={getMonths()}
                      onChange={(option) => setStartMonth(option?.value)}
                      defaultInputValue={startMonth}
                      className="consultant-register-select"
                    />
                  </Col>
                </Row>
                {isEndDate && (
                  <>
                    <Label className="font-regular mt-4">End Date</Label>
                    <Row>
                      <Col>
                        <Select
                          inputId="select-end-year"
                          placeholder="Year"
                          onChange={(option) => setEndYear(option?.value)}
                          options={getYearList()}
                          defaultInputValue={endYear}
                          className="mr-1"
                        />
                      </Col>
                      <Col>
                        <Select
                          inputId="select-end-month"
                          placeholder="Month"
                          onChange={(option) => setEndMonth(option?.value)}
                          options={getMonths()}
                          defaultInputValue={endMonth}
                          className="consultant-register-select"
                        />
                      </Col>
                    </Row>
                  </>
                )}
                <TextInput
                  labelClassName="font-regular mt-4"
                  labelText="Description"
                  type="textarea"
                  rows={4}
                  onChange={(event) => setDescription(event.target.value)}
                  maxLength={450}
                  value={description}
                  className="consult-register-text-input"
                  containerClassName="consultant-register-text-input-container"
                />
              </div>
            </div>
            <div className="consultant-register-submit-button-container">
              <Button
                type={BUTTON_TYPES.SECONDARY}
                onClick={handleToggle}
                title="Cancel"
              />
              <Button
                type={BUTTON_TYPES.PRIMARY}
                title={'Submit'}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

const ConsultantEducationRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
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
  const handleSkillToggle = (event: any) => {
    event.preventDefault();
    setIsSkillModalOpen((prev) => !prev);
  };
  const handleSkillModalOpen = () => {
    setIsSkillModalOpen(true);
  };
  const handleModalOpen = () => {
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
              onClick={handleModalOpen}
              type="button"
            >
              <MdAdd size={30} />
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
              type="button"
              onClick={handleSkillModalOpen}
            >
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
                  className="consultant-register-tag font-medium font-size-small text-dark-color"
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
        qualification={{}}
        type="CREATE"
      />
      <SkillFormModal
        isModalOpen={isSkillModalOpen}
        qualification={{}}
        handleToggle={handleSkillToggle}
      />
    </Form>
  );
};

export { ConsultantEducationRegistration };
