import search from '../../assets/images/chatspage/search.png';

type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <div id="chatHeader">
      <div id="search">
        <img src={search} alt="" width={22} />
        <input type="text" placeholder="Search or start new chat" />
      </div>
    </div>
  );
};

export default ChatHeader;
