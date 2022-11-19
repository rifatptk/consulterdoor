import initialize from '../../assets/images/chatspage/initialize.png';

type Props = {};

const ChatInitButton = (props: Props) => {
  return (
    <div className="init-button">
      <div className="icon">
        <img src={initialize} alt="" width={25} />
      </div>
      <span>Appoinment Initialized</span>
    </div>
  );
};

export default ChatInitButton;
