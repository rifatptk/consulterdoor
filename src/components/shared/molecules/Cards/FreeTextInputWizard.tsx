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
import { Button, BUTTON_TYPES } from '../../atoms';

interface IProps {
  onRequestClose?: () => void;
  modalIsOpen?: boolean;
  modalTitle: string;
  afterOpenModal?: () => void;
}

const FreeTextInputWizard = ({
  onRequestClose,
  modalIsOpen = false,
  modalTitle,
  afterOpenModal,
}: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageNumber, _] = useState(2);
  useEffect(() => {
    setIsModalOpen(modalIsOpen);
  }, [modalIsOpen]);
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        toggle={handleToggle}
        contentClassName="wizard-modal"
        centered={true}
      >
        <Progress value={25} className="wizard-progress soft-main-color-bg" />
        <ModalHeader className="modal-custom-header" toggle={handleToggle}>
          <div className="modal-page-number font-size-small">{pageNumber}</div>
        </ModalHeader>
        <ModalBody>
          <div className="primary-font font-medium font-size-small text-center mb-4">
            {modalTitle}
          </div>
          <Form>
            <FormGroup>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                className="light-gray-color-bg"
                style={{ border: 'none' }}
                rows={6}
                placeholder="Enter your answer here (Max 350 words)."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-custom-footer">
          <Button type={BUTTON_TYPES.SECONDARY} title="Previous" />
          <Button type={BUTTON_TYPES.PRIMARY} title="Next" />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { FreeTextInputWizard };
