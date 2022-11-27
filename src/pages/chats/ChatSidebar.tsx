import ChatCard from './ChatCard';

type Props = {
  data: any;
  selectedChat: number;
  selectedScreen: string;
  setSelectedChat: (i: number) => void;
  setselectedScreen: (param: string) => void;
};

const ChatSidebar = ({
  data,
  selectedChat,
  setSelectedChat,
  selectedScreen,
  setselectedScreen,
}: Props) => {
  return (
    <div
      id="chatSidebar"
      className={`${selectedScreen === 'chat-list' ? 'selected-screen' : ''}`}
    >
      <div id="sidebar-content">
        {data.map((el: any, i: number) => (
          <ChatCard
            data={el}
            key={i}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            setselectedScreen={setselectedScreen}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
