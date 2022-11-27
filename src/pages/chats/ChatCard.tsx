import './chatCard.scss';

type Props = {
  data: any;
  selectedChat: number;
  setSelectedChat: (i: number) => void;
  index: number;
  setselectedScreen: (param: string) => void;
};

const ChatCard = ({
  data,
  selectedChat,
  setSelectedChat,
  index,
  setselectedScreen,
}: Props) => {
  return (
    <div
      className={`chat-card ${selectedChat === index ? 'selected' : ''}`}
      onClick={() => {
        setSelectedChat(index);
        setselectedScreen('chat-main');
      }}
    >
      <div className="card-cont">
        <div className="avatar-container">
          <img src={data.avatar} alt="" className="avatar" />
          {data.active && <div className="active-indicator" />}
        </div>
        <div className="content">
          <div className="top">
            <h5>{data.username}</h5>
            <span>{data.lastMessage.time}</span>
          </div>
          <p className="last-message">
            {data.lastMessage.message.substr(0, 25)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
