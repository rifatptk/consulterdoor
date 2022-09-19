import { messages } from '../../../../shared/localize';
import { Button, BUTTON_TYPES, TextLabel } from '../../../shared/atoms';

interface IResponseCardProps {
  text: string;
  action?: React.Dispatch<React.SetStateAction<boolean>>;
}

const WaitForResponseCard = (props: IResponseCardProps) => {
  return (
    <div className="chat-footer-wait ">
      <div className="wait-msg-comp">
        <img
          src={require('../../../../assets/images/wait_for_response.png')}
          alt="Wait for response image"
        />
        <TextLabel
          className="primary-font font-medium font-size-medium wait-msg"
          text={props.text}
        />{' '}
        {props.action ? (
          <Button
            type={BUTTON_TYPES.ELEVATED}
            title={messages.appointmentPage.selectTimeSlot}
            className="accept-btn response-btn secondary-font font-bold font-size-medium"
            onClick={() => (props.action ? props.action(true) : null)}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default WaitForResponseCard;
