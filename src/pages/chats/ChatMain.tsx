import ChatInitButton from './ChatInitButton';
import ChatInputs from './ChatInputs';
import ChatProgress from './ChatProgress';

type Props = {
  profile: any;
};

const ChatMain = ({ profile }: Props) => {
  return (
    <div id="chatMain">
      <ChatInitButton />
      <ChatProgress profile={profile} />
      <ChatInputs />
    </div>
  );
};

export default ChatMain;
