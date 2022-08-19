import {
  Avatar,
  Conversation,
  ConversationList,
} from '@chatscope/chat-ui-kit-react';
import { Key, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IConversation } from '../../../../services/chat/chatInterface';
import { RootState } from '../../../../shared/hooks';
import { loadChatList, setActiveChat } from '../../../../store/actions';
import { ChatCardInfo } from '../../../molecules';

interface IChatListProps {
  handleChatSelect: (conversation: IConversation) => void;
}

function ChatList(props: IChatListProps) {
  const dispatch = useDispatch();
  const chatState = useSelector((state: RootState) => state.chatReducer);

  const userState = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (userState?.user?.username) {
      dispatch(loadChatList({ user_key: userState?.user?.username }));
    }
  }, [userState?.user?.username]);

  return (
    <div className="chat-list">
      <ConversationList>
        {chatState.chats.map(
          (conversation: IConversation, index: Key | null | undefined) => {
            return (
              <Conversation
                key={index}
                className="chat-card"
                onClick={() => dispatch(setActiveChat(conversation.chatKey))}
              >
                <Avatar
                  src={conversation.participantImage}
                  name={conversation.participantName}
                  className="avatar-pic available available_bullet"
                  size="lg"
                  status={conversation.isActive ? 'available' : undefined}
                />
                <Conversation.Content className="chat-card-detail">
                  <ChatCardInfo
                    name={conversation.participantName}
                    service={conversation.serviceName}
                    jobTitle={conversation.jobTitle}
                  />
                </Conversation.Content>
              </Conversation>
            );
          }
        )}
      </ConversationList>
    </div>
  );
}

export { ChatList };
export type { IChatListProps, IConversation };
