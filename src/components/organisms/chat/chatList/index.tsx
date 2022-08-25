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
  handleConversationClick: () => void;
  conversationAvatarStyle: React.CSSProperties;
  conversationContentStyle: React.CSSProperties;
}

function ChatList(props: IChatListProps) {
  const dispatch = useDispatch();

  return (
    <ConversationList>
      {props.chats.map(
        (conversation: IConversation, index: Key | null | undefined) => {
          return (
            <Conversation
              key={index}
              className="chat-card background-color-bg"
              onClick={() => {
                dispatch(setActiveChat(conversation.chatKey));
                props.handleConversationClick();
              }}
            >
              <Avatar
                src={conversation.participantImage}
                name={conversation.participantName}
                className="avatar-pic available available_bullet"
                size="lg"
                style={props.conversationAvatarStyle}
                status={conversation.isActive ? 'available' : undefined}
              />
              <Conversation.Content style={props.conversationContentStyle}>
                <ChatCardInfo
                  name={conversation.participantName}
                  service={conversation.serviceName}
                  jobTitle={conversation.jobTitle}
                />
              </Conversation.Content>
              <Conversation.Operations />
            </Conversation>
          );
        }
      )}
    </ConversationList>
  );
}

export { ChatList };
export type { IChatListProps, IConversation };
