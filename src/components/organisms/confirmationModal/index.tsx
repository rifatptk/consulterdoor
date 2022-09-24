import { useState } from 'react';

import {
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

import { Button, BUTTON_TYPES } from '../../shared/atoms';
export interface IConfirmationModalProps {
  modalIsOpen?: boolean;
  setModalIsOpen: (isOpen: boolean) => any;
  text: string;
  haveTextInput: boolean;
  confirmFn: (props: any) => any;
  declineFn: (props: any) => any;
}

const ConfirmationModal = ({
  modalIsOpen = false,
  setModalIsOpen,
  text,
  haveTextInput,
  confirmFn,
  declineFn,
}: IConfirmationModalProps) => {
  const [input, setInput] = useState<string>('');

  const props = {};

  const handleToggle = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        toggle={handleToggle}
        contentClassName="wizard-modal"
        centered={true}
        fullscreen={'sm'}
      >
        <ModalHeader
          className="modal-custom-header"
          toggle={handleToggle}
        />
        <ModalBody>
          <div className="primary-font font-medium font-size-small text-center mb-4">
            {text}
          </div>
          {haveTextInput ? (
            <Form>
              <FormGroup>
                <Input
                  id="answer"
                  name="text"
                  type="textarea"
                  className="input-wizard-text"
                  style={{ border: 'none' }}
                  rows={6}
                  value={input}
                  maxLength={400}
                  placeholder={`Enter your answer here (Max ${400} words).`}
                  onChange={(e) => setInput(e.target.value)}
                />
              </FormGroup>
            </Form>
          ) : null}
        </ModalBody>
        <ModalFooter className="modal-custom-footer">
          <Button
            type={BUTTON_TYPES.SECONDARY}
            title="Confirm"
            onClick={() =>
              confirmFn({
                ...props,
                ...(haveTextInput && {
                  inputText: input,
                }),
              })
            }
          />

          <Button
            type={BUTTON_TYPES.PRIMARY}
            title={'Cancel'}
            onClick={() => declineFn(props)}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { ConfirmationModal };
