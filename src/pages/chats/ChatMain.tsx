import ChatInitButton from './ChatInitButton';
import ChatInputs from './ChatInputs';
import ChatProgress from './ChatProgress';

type Props = {
  profile: any;
  selectedScreen: string;
  setselectedScreen: (arg: string) => void;
};

const ChatMain = ({ profile, selectedScreen, setselectedScreen }: Props) => {
  return (
    <div
      id="chatMain"
      className={`${selectedScreen === 'chat-main' ? 'selected-screen' : ''}`}
    >
      <div id="screen-selectors">
        <div
          id="chat-list"
          title="Chat List"
          onClick={() => setselectedScreen('chat-list')}
        >
          Chats
        </div>
        <div
          id="user-profile"
          title="User Profile"
          onClick={() => setselectedScreen('user-profile')}
        >
          Profile
        </div>
      </div>
      <ChatInitButton />
      <ChatProgress profile={profile} />
      <ChatInputs />
    </div>
  );
};

export default ChatMain;
