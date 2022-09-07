import { messages as texts } from '../../../../shared/localize';
import { TextLabel } from '../../../shared/atoms';

const WaitForResponseCard = () => {
  return (
    <div className="chat-footer-wait ">
      <div className="wait-msg-comp">
        <img
          src={require('../../../../assets/images/wait_for_response.png')}
          alt="Wait for response image"
        />
        <TextLabel
          className="primary-font font-medium font-size-medium wait-msg"
          text={texts.appointmentPage.waitForResponse}
        />{' '}
      </div>
    </div>
  );
};

export default WaitForResponseCard;
