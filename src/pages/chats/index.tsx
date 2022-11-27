import { PageContainer } from '../../components/shared';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatProfile from './ChatProfile';
import ChatSidebar from './ChatSidebar';
import avatar from '../../assets/images/userProfilePage/avatar.png';

import './index.scss';
import { useState } from 'react';

const chatsData = [
  {
    id: 1,
    active: true,
    username: 'Mueez',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '02:35 PM',
    },
  },
  {
    id: 2,
    username: 'Shehnaz',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '12:35 PM',
    },
  },
  {
    id: 3,
    active: true,
    username: 'Client',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '09:35 PM',
    },
  },
  {
    id: 4,
    active: true,
    username: 'Rifat',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '09:35 PM',
    },
  },
  {
    id: 5,
    username: 'Xavi',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '07:46 PM',
    },
  },
  {
    id: 6,
    active: true,
    username: 'Rifat',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '09:35 PM',
    },
  },
  {
    id: 7,
    username: 'Xavi',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '07:46 PM',
    },
  },
  {
    id: 8,
    active: true,
    username: 'Rifat',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '09:35 PM',
    },
  },
  {
    id: 9,
    username: 'Xavi',
    avatar: avatar,
    lastMessage: {
      message: 'Thank you very much, I am waiting',
      time: '07:46 PM',
    },
  },
];

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [selectedScreen, setselectedScreen] = useState('chat-list'); //chat-list|chat-main|user-profile
  return (
    <div id="chats">
      <PageContainer noFooter>
        <>
          <ChatHeader
            setselectedScreen={setselectedScreen}
            profile={chatsData[selectedChat]}
          />
          <div id="chatContentsContainer">
            <ChatSidebar
              selectedScreen={selectedScreen}
              setselectedScreen={setselectedScreen}
              data={chatsData}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
            <ChatMain
              profile={chatsData[selectedChat]}
              selectedScreen={selectedScreen}
              setselectedScreen={setselectedScreen}
            />
            <ChatProfile
              setselectedScreen={setselectedScreen}
              selectedScreen={selectedScreen}
              profile={chatsData[selectedChat]}
            />
          </div>
        </>
      </PageContainer>
    </div>
  );
};

export default Chats;
