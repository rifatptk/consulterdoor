import search from '../../assets/images/chatspage/search.png';

type Props = {
  setselectedScreen: (arg: string) => void;
  profile: any;
};

const ChatHeader = ({ setselectedScreen, profile }: Props) => {
  return (
    <div id="chatHeader">
      <div id="search">
        <img src={search} alt="" width={22} />
        <input type="text" placeholder="Search or start new chat" />
      </div>
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
          <img src={profile.avatar} alt="" />
          <span>{profile.username}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
