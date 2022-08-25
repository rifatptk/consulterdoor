import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  Message,
  MessageInput,
  MessageList,
  MessageModel,
} from '@chatscope/chat-ui-kit-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IAppointmentResponseProps,
  IMessage,
  ISendMessageProps,
} from '../../../../services/chat/chatInterface';
import { RootState } from '../../../../shared/hooks';
import {
  loadChat,
  sendAppointmentAcceptance,
  sendMessage,
} from '../../../../store/actions';
import {
  RequestAppointmentAcceptanceCard,
  WaitForResponseCard,
} from '../../../molecules';
import { CalenderModal } from '../../calenderModal';
import { IConversation } from '../chatList';

interface IChatWrapperProps {
  handleBackClick: () => void;
  style: React.CSSProperties;
}
interface ITimeslot {
  time: string;
  date: Date;
}

function ChatWrapper({ handleBackClick, style }: IChatWrapperProps) {
  const [messages, setMessages] = useState<MessageModel[] | []>([]);
  const [chatDetail, setChatDetail] = useState<IConversation>();
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const chatState = useSelector((state: RootState) => state.chatReducer);
  const userState = useSelector((state: RootState) => state.userReducer);

  const handleSend = (message: string) => {
    const params: ISendMessageProps = {
      conversationKey: chatState.activeChat,
      message,
      messageType: 'Text',
      senderKey: userState.user.username,
    };
    dispatch(sendMessage(params));
    setMessages([
      ...messages,
      {
        message,
        position: 'single',
        direction: 'outgoing',
      },
    ]);
  };

  const handleCalenderToggle = () => {
    setIsCalenderOpen((prev) => !prev);
  };

  const handleAcceptance = (response: 'ACCEPT' | 'REJECT') => {
    const params: IAppointmentResponseProps = {
      conversationKey: chatState.activeChat,
      response,
    };
    if (response === 'ACCEPT') {
      setIsCalenderOpen(true);
    } else {
      dispatch(sendAppointmentAcceptance(params));
    }
  };

  const handleScheduleSubmit = (timeslots: ITimeslot[]) => {
    const params: IAppointmentResponseProps = {
      conversationKey: chatState.activeChat,
      response: 'ACCEPT',
    };
    handleCalenderToggle();
    dispatch(sendAppointmentAcceptance(params));
  };

  useEffect(() => {
    if (chatState.activeChat !== '') {
      dispatch(loadChat(chatState.activeChat));
    }
  }, [chatState.activeChat]);

  useEffect(() => {
    const activeChat = chatState.chats.find(
      (chat: IConversation) => chatState.activeChat === chat.chatKey
    );
    setChatDetail(activeChat);
    if (activeChat) {
      const activeMessages: MessageModel[] | undefined =
        activeChat.messages?.map((message: IMessage) => {
          return {
            message: message.message,
            position: 'single',
            direction: message.direction,
            sentTime: message.messageTime,
            sender: message.senderName,
          };
        });
      setMessages(activeMessages ? activeMessages : []);
    }
  }, [chatState.chats]);

  return (
    <>
      <ChatContainer style={style} className="chat-container">
        <ConversationHeader className="chat-header">
          <ConversationHeader.Back onClick={handleBackClick} />
          <Avatar
            src={chatDetail?.participantImage}
            name={chatDetail?.participantName}
            className="chat-avatar-pic"
          />
          <ConversationHeader.Content
            userName={chatDetail?.participantName}
            info="Active 10 mins ago"
          />
        </ConversationHeader>
        <MessageList className="chat-container">
          {messages.map((message: MessageModel, index: number) => {
            return <Message model={message} key={index} className="chat-msg" />;
          })}
        </MessageList>
        {chatDetail?.status === 'INITIATED' &&
        chatDetail?.role === 'consultant' ? (
          <div is="MessageInput">
            <WaitForResponseCard />
          </div>
        ) : chatDetail?.status === 'INITIATED' &&
          chatDetail?.role === 'client' ? (
          <div is="MessageInput">
            <RequestAppointmentAcceptanceCard
              handleAcceptance={handleAcceptance}
            />
          </div>
        ) : (
          <MessageInput
            className="chat-input"
            placeholder="Type message here"
            onSend={handleSend}
            autoFocus={true}
          />
        )}
      </ChatContainer>
      <CalenderModal
        isCalenderOpen={isCalenderOpen}
        handleSubmit={handleScheduleSubmit}
        handleToggle={handleCalenderToggle}
      />
    </>
  );
}

export { ChatWrapper };
