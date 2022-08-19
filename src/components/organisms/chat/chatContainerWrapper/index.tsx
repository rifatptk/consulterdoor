import { Avatar, ChatContainer, ConversationHeader, Message, MessageInput, MessageList, MessageModel, MessageSeparator, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMessage, ISendMessageProps } from '../../../../services/chat/chatInterface';
import { RootState } from '../../../../shared/hooks';
import { loadChat, sendMessage } from '../../../../store/actions';
import { IConversation } from '../chatList';

interface IChatWrapperProps {
    activeChat: IConversation | undefined;
}

function ChatWrapper(props: IChatWrapperProps) {

    const [messages, setMessages] = useState<MessageModel[] | []>([]);
    const [chatDetail, setChatDetail] = useState<IConversation>();
    const dispatch = useDispatch();
    const chatState = useSelector(
        (state: RootState) => state.chatReducer
    );
    const userState = useSelector(
        (state: RootState) => state.userReducer
    );

    const handleSend = (message: string) => {
        // TODO:Need to set userKey as sender key
        const params: ISendMessageProps = {
            conversationKey: chatState.activeChat,
            message,
            messageType: 'Text',
            senderKey: userState.user.username,

        };
        dispatch(sendMessage(params));
        setMessages([...messages, {
            message,
            position: 'single',
            direction: 'outgoing'
        }]);

    };

    useEffect(() => {
        if (chatState.activeChat != '') {
            dispatch(loadChat(chatState.activeChat));
        }

    }, [chatState.activeChat]);

    useEffect(() => {
        const activeChat = chatState.chats.find((chat: IConversation) => chatState.activeChat === chat.chatKey);
        setChatDetail(activeChat);
        if (activeChat) {
            const messages: MessageModel[] | undefined = activeChat.messages?.map((message: IMessage) => {
                return {
                    message: message.message,
                    position: 'single',
                    direction: message.direction,
                    sentTime: message.messageTime,
                    sender: message.senderName
                };
            });
            setMessages(messages ? messages : []);
        }

    }, [chatState.chats]);

    return (

        < ChatContainer className="chat-container" >
            <ConversationHeader className="chat-header">
                <Avatar src={chatDetail?.participantImage} name={chatDetail?.participantName} className="chat-avatar-pic" />
                <ConversationHeader.Content userName={chatDetail?.participantName} info="Active 10 mins ago" />
                {/* <ConversationHeader.Actions>
                    <VoiceCallButton />
                    <VideoCallButton />
                    <InfoButton />
                </ConversationHeader.Actions> */}
            </ConversationHeader>
            <MessageList className="chat-container" typingIndicator={<TypingIndicator content={`${chatDetail?.participantName} is Typing `} />}>

                <MessageSeparator>Saturday, 30 November 2019</MessageSeparator>
                {messages.map((message: MessageModel, index: number) => {
                    return (
                        <Message
                            model={message} className="chat-msg"
                        >
                            {/* {message.direction === 'incoming' ?
                                <Avatar
                                    className="chat-avatar-pic"
                                    src={chatDetail?.participantImage}
                                    name={chatDetail?.participantName} /> : ""} */}

                        </Message>

                    );
                })}

            </MessageList>
            <MessageInput className="chat-input" placeholder="Type message here" onSend={handleSend} autoFocus={true} />
            {/* <InputToolbox>
                                    <AttachmentButton />
                                    <SendButton />
                                </InputToolbox> */}
        </ChatContainer >

    );

}

export { ChatWrapper };