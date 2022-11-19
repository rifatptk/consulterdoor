import send from '../../assets/images/chatspage/send.png';
import emoji from '../../assets/images/chatspage/emoji.png';
import attach from '../../assets/images/chatspage/attach.png';

type Props = {};

const ChatInputs = (props: Props) => {
  return (
    <div id="chat-inputs">
      <div id="inputs-container">
        <div className="text-input">
          <input type="text" placeholder="Type Something..." />
          <div className="send-btn">
            <img src={send} alt="" width={30} />
          </div>
        </div>
        <div className="send-icons">
          <img src={emoji} alt="" width={30} />
        </div>
        <div className="send-icons">
          <img src={attach} alt="" width={30} />
        </div>
      </div>
    </div>
  );
};

export default ChatInputs;
