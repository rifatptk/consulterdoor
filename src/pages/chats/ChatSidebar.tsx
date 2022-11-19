import ChatCard from './ChatCard';

type Props = {
  data: any;
  selectedChat: number;
  setSelectedChat: (i: number) => void;
};

const ChatSidebar = ({ data, selectedChat, setSelectedChat }: Props) => {
  return (
    <div id="chatSidebar">
      <div id="sidebar-content">
        {data.map((el: any, i: number) => (
          <ChatCard
            data={el}
            key={i}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
