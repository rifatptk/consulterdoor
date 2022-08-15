import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
} from 'reactstrap';
import { AppointmentService } from '../../../../services';
import { RootState } from '../../../../shared/hooks';
import { IModalQuestion } from '../../../../shared/interfaces';
import { Button, BUTTON_TYPES } from '../../atoms';

interface IProps {
  onRequestClose?: () => void;
  modalIsOpen?: boolean;
  afterOpenModal?: () => void;
  setModalIsOpen: (isOpen: boolean) => any;
  questions: IModalQuestion[];
  serviceKey?: string;
}

const FreeTextInputWizard = ({
  onRequestClose,
  modalIsOpen = false,
  afterOpenModal,
  setModalIsOpen,
  questions,
  serviceKey
}: IProps) => {

  const [modalTitle, setModalTitle] = useState('');
  const [maxLength, setMaxLength] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [inputAnswer, setInputAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<any>({});

  const userState = useSelector(
    (state: RootState) => state.userReducer
  );

  const handleToggle = () => {

    setModalIsOpen(false);
  };
  const displayQuestion = (question: IModalQuestion) => {
    setModalTitle(question.questionTitle);
    setMaxLength(question.maxLength);
    setInputAnswer(answers[questionIndex] ? answers[questionIndex].answer : '');
  };
  useEffect(() => {
    displayQuestion(questions[questionIndex]);
  }, [questionIndex]);

  const handleSubmit = (answersSet: any) => {
    setAnswers(answersSet);
    setModalIsOpen(false);

    if (serviceKey) {
      AppointmentService.createAppointment({
        'clientUserKey': userState.user.username,
        'consultantServiceKey': serviceKey,
        'initialAnswers': Object.values(answersSet)
      });
    }

  };
  const calculateProgress = () => {
    return ((questionIndex + 1) / questions.length) * 100;
  };
  const handleNextQuestion = () => {
    const answersSet = {
      ...answers,
      [questionIndex]: {
        'question': questions[questionIndex].questionTitle,
        'answer': inputAnswer
      }
    };
    setInputAnswer('');
    setAnswers(answersSet);
    setQuestionIndex((prev) => {
      if (prev >= questions.length - 1) {
        handleSubmit(answersSet);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        toggle={handleToggle}
        contentClassName="wizard-modal"
        centered={true}
      >
        <Progress
          value={calculateProgress()}
          className="wizard-progress soft-main-color-bg"
        />
        <ModalHeader className="modal-custom-header" toggle={handleToggle}>
          <div className="modal-page-number font-size-small">
            {questionIndex + 1} out of {questions.length}
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="primary-font font-medium font-size-small text-center mb-4">
            {modalTitle}
          </div>
          <Form>
            <FormGroup>
              <Input
                id="answer"
                name="text"
                type="textarea"
                className="light-gray-color-bg"
                style={{ border: 'none' }}
                rows={6}
                value={inputAnswer}
                maxLength={maxLength}
                placeholder={`Enter your answer here (Max ${maxLength} words).`}
                onChange={(e) => setInputAnswer(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-custom-footer">
          {questionIndex > 0 && (
            <Button
              type={BUTTON_TYPES.SECONDARY}
              title="Previous"
              onClick={() => setQuestionIndex((prev) => prev - 1)}
            />
          )}
          <Button
            type={BUTTON_TYPES.PRIMARY}
            title={questionIndex + 1 < questions.length ? 'Next' : 'Submit'}
            onClick={handleNextQuestion}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { FreeTextInputWizard };
