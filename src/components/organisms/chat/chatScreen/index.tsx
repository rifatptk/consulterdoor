import { MainContainer, Search, Sidebar } from '@chatscope/chat-ui-kit-react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../shared/hooks';
import { messages } from '../../../../shared/localize';
import { loadChatList } from '../../../../store/actions';
import { TextLabel } from '../../../shared';
import { ChatWrapper } from '../chatContainerWrapper';
import { ChatList } from '../chatList';

function ChatScreen() {
  const chatState = useSelector((state: RootState) => state.chatReducer);
  const userState = useSelector((state: RootState) => state.userReducer);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState({});
  const [chatContainerStyle, setChatContainerStyle] = useState({});
  const [conversationContentStyle, setConversationContentStyle] = useState({});
  const [conversationAvatarStyle, setConversationAvatarStyle] = useState({});

  const dispatch = useDispatch();
  const handleBackClick = () => setSidebarVisible(!sidebarVisible);
  const handleConversationClick = useCallback(() => {
    if (sidebarVisible) {
      setSidebarVisible(false);
    }
  }, [sidebarVisible, setSidebarVisible]);
  useEffect(() => {
    if (sidebarVisible) {
      setSidebarStyle({
        display: 'flex',
        flexBasis: 'auto',
        width: '100%',
        maxWidth: '100%',
      });
      setConversationContentStyle({
        display: 'flex',
      });
      setConversationAvatarStyle({
        marginRight: '1em',
      });
      setChatContainerStyle({
        display: 'none',
      });
    } else {
      setSidebarStyle({});
      setConversationContentStyle({});
      setConversationAvatarStyle({});
      setChatContainerStyle({});
    }
  }, [
    sidebarVisible,
    setSidebarVisible,
    setConversationContentStyle,
    setConversationAvatarStyle,
    setSidebarStyle,
    setChatContainerStyle,
  ]);

  useEffect(() => {
    if (userState?.user?.username) {
      dispatch(loadChatList({ user_key: userState?.user?.username }));
    }
  }, [userState?.user?.username]);

  return (
    <div>
      <div className="chat-border">
        <TextLabel
          className="primary-font font-size-large font-bold"
          text={messages.appointmentPage.title}
        />
      </div>
      {chatState.chats.length > 0 ? (
        <div className="chat-main-container">
          <MainContainer responsive={true}>
            <Sidebar position="left" scrollable={false} style={sidebarStyle}>
              <Search placeholder="Search..." />
              <ChatList
                conversationContentStyle={conversationContentStyle}
                conversationAvatarStyle={conversationAvatarStyle}
                handleConversationClick={handleConversationClick}
                chats={chatState.chats}
              />
            </Sidebar>
            <ChatWrapper
              style={chatContainerStyle}
              handleBackClick={handleBackClick}
            />
          </MainContainer>
        </div>
      ) : (
        <div>No Chats</div>
      )}
    </div>
  );
}

export { ChatScreen };
