import {
  Avatar,
  Conversation,
  ConversationList,
} from '@chatscope/chat-ui-kit-react';
import { Key } from 'react';
import { useDispatch } from 'react-redux';
import { IConversation } from '../../../../services/chat/chatInterface';
import { setActiveChat } from '../../../../store/actions';
import { ChatCardInfo } from '../../../molecules';

interface IChatListProps {
  chats: IConversation[];
}

function ChatList(props: IChatListProps) {
  const dispatch = useDispatch();

  return (
    <div className="chat-list">
      <ConversationList>
        {props.chats.map(
          (conversation: IConversation, index: Key | null | undefined) => {
            return (
              <Conversation
                key={index}
                className="chat-card background-color-bg"
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
