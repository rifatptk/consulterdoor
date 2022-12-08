import ChatInitButton from './ChatInitButton';
import ChatInputs from './ChatInputs';
import ChatProgress from './ChatProgress';

interface Props {
  profile: any;
  selectedScreen: string;
  setselectedScreen: (arg: string) => void;
}

const ChatMain = ({ profile, selectedScreen, setselectedScreen }: Props) => {
  return (
    <div
      id="chatMain"
      className={`${selectedScreen === 'chat-main' ? 'selected-screen' : ''}`}
    >
      <ChatInitButton />
      <ChatProgress profile={profile} />
      <ChatInputs />
    </div>
  );
};

export default ChatMain;
