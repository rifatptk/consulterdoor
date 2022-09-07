import { messages as texts } from '../../../../shared/localize';
import { Button, BUTTON_TYPES, TextLabel } from '../../../shared/atoms';

interface IProps {
  handleAcceptance: (response: 'ACCEPT' | 'REJECT') => void;
}

const RequestAppointmentAcceptanceCard = (props: IProps) => {
  return (
    <div className="chat-footer-wait ">
      <div className="wait-msg-comp">
        <TextLabel
          className="secondary-font font-medium font-size-regular wait-msg"
          text={texts.appointmentPage.requestAcceptance}
        />{' '}
        <div className="chat-response-btns">
          <Button
            type={BUTTON_TYPES.ELEVATED}
            title="Reject"
            className="decline-btn response-btn secondary-font font-bold font-size-medium"
            onClick={() => props.handleAcceptance('REJECT')}
          />
          <Button
            type={BUTTON_TYPES.ELEVATED}
            title="Accept"
            className="accept-btn response-btn secondary-font font-bold font-size-medium"
            onClick={() => props.handleAcceptance('ACCEPT')}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestAppointmentAcceptanceCard;
