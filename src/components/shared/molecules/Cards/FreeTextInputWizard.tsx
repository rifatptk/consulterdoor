import { useEffect, useState } from 'react';
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
import { IModalQuestion } from '../../../../shared/interfaces';
import { Button, BUTTON_TYPES } from '../../atoms';

interface IProps {
  onRequestClose?: () => void;
  modalIsOpen?: boolean;
  afterOpenModal?: () => void;
  questions: IModalQuestion[];
}

const FreeTextInputWizard = ({
  onRequestClose,
  modalIsOpen = false,
  afterOpenModal,
  questions,
}: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [maxLength, setMaxLength] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  useEffect(() => {
    setIsModalOpen(modalIsOpen);
  }, [modalIsOpen]);
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const displayQuestion = (question: IModalQuestion) => {
    setModalTitle(question.questionTitle);
    setMaxLength(question.maxLength);
  };
  useEffect(() => {
    displayQuestion(questions[questionIndex]);
  }, [questionIndex]);

  const handleSubmit = () => {
    setIsModalOpen(false);
  };
  const calculateProgress = () => {
    return ((questionIndex + 1) / questions.length) * 100;
  };
  const handleNextQuestion = () => {
    setQuestionIndex((prev) => {
      if (prev >= questions.length - 1) {
        handleSubmit();
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
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
            {questionIndex + 1}
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
                className="input-wizard-text"
                style={{ border: 'none' }}
                rows={6}
                maxLength={maxLength}
                placeholder={`Enter your answer here (Max ${maxLength} words).`}
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
