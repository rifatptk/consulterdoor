import { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { AuthService } from '../../../services';
interface IOtpModalProps {
  handleToggle?: () => void;
  isModalOpen: boolean;
  email: string;
  disabled?: boolean;
  password: string;
}
const OTP_LENGTH = 6;
const KEY_BACKSPACE = 8;
const KEY_DELETE = 46;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;
const OTPModal = ({
  disabled = false,
  handleToggle,
  isModalOpen,
  email,
  password,
}: IOtpModalProps) => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const submitHandler = async (value: string) => {
    try {
      console.log('AUTHHH');
      await AuthService.UserValidation(email, value);
      await AuthService.UserSignIn(email, password);
      navigate('/');
    } catch (error) {
      setHasError(true);
      console.log('errr', error);
    }
  };

  const inputRefs = useMemo(() => {
    const refs = [];
    for (let i = 0; i < OTP_LENGTH; i++) {
      refs.push(createRef<HTMLInputElement>());
    }

    return refs;
  }, undefined);
  useEffect(() => {
    if (isModalOpen) focusInputByIndex(0);
  }, [isModalOpen]);
  const focusInputByIndex = useCallback(
    (index) => {
      if (inputRefs[index].current) {
        inputRefs[index].current!.focus();
        inputRefs[index].current!.selectionStart = 1;
      }
    },
    [inputRefs]
  );
  const handleChange = useCallback(
    (e, index) => {
      setHasError(false);
      const inputValue = inputRefs[index].current!.value.replace(/\D/g, '');
      let charIndex = 0;
      let currentIndex = index;
      for (; currentIndex < OTP_LENGTH; currentIndex++) {
        if (inputValue[charIndex]) {
          inputRefs[currentIndex].current!.value = inputValue[charIndex];
          charIndex++;
        } else {
          inputRefs[currentIndex].current!.value = '';
          break;
        }
      }

      if (currentIndex >= OTP_LENGTH) {
        currentIndex = OTP_LENGTH - 1;
      }
      focusInputByIndex(currentIndex);

      let finalValue = '';
      inputRefs.forEach((ref) => {
        finalValue += ref.current!.value;
      });

      if (finalValue.length === OTP_LENGTH) {
        submitHandler(finalValue);
      }
    },
    [focusInputByIndex, inputRefs, submitHandler]
  );
  const handleKeyUp = useCallback(
    (e, index) => {
      if (e.keyCode === KEY_BACKSPACE || e.keyCode === KEY_DELETE) {
        inputRefs[index].current!.value = '';
        const previousIndex = index > 1 ? index - 1 : 0;
        focusInputByIndex(previousIndex);
      } else if (e.keyCode === KEY_LEFT_ARROW) {
        if (index > 0) {
          focusInputByIndex(index - 1);
        }
      } else if (e.keyCode === KEY_RIGHT_ARROW) {
        if (index < OTP_LENGTH - 1) {
          focusInputByIndex(index + 1);
        }
      }
    },
    [focusInputByIndex, inputRefs]
  );
  return (
    <Modal
      isOpen={isModalOpen}
      toggle={handleToggle}
      centered={true}
      fullscreen={'sm'}
      backdrop="static"
    >
      <ModalBody style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="m-2">
          <div className="font-bold font-size-medium mb-2">
            OTP Verification
          </div>
          <div className="font-regular font-size-small mb-1 secondary-text-color">
            A 6 digit OTP has sent via email to verify you email!
          </div>
          <div className="font-regular font-size-small mb-1 secondary-text-color">
            Enter the OTP you recieved to
          </div>
          <div className="font-regular font-size-small">{email}</div>
          <div className="otp-inputs-container mt-4">
            {inputRefs.map((ref, index) => (
              <input
                autoFocus={index === 0}
                disabled={disabled}
                key={'otp' + index}
                defaultValue=""
                ref={ref}
                className={hasError ? 'otp-error' : ''}
                onChange={(e) => handleChange(e, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                type="tel"
              />
            ))}
          </div>
          <button className="font-regular font-size-small text-blue-color mt-3 mb-4">
            Resend OTP
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export { OTPModal };
