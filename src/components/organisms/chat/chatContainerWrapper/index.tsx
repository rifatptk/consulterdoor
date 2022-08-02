import { Avatar, ChatContainer, ConversationHeader, InfoButton, Message, MessageInput, MessageList, MessageModel, MessageSeparator, TypingIndicator, VideoCallButton, VoiceCallButton } from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { IConversation } from "../chatList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/hooks";
import { loadChat } from "../../../../store/actions";


interface IChatWrapperProps {
    activeChat: IConversation | undefined;
}


function ChatWrapper(props: IChatWrapperProps) {

    const [messages, setMessages] = useState<MessageModel[] | []>([]);
    const dispatch = useDispatch();
    const chatState = useSelector(
        (state: RootState) => state.chatReducer
    );



    const handleSend = (message: string) => {
        console.log(message, 'xxxxxxxxxxxxxx');
        setMessages([...messages, {
            message,
            position: "single",
            direction: 'outgoing'
        }]);

    };

    useEffect(() => {
        if (chatState.activeChat != "") {
            dispatch(loadChat(chatState.activeChat));
        }

    }, [chatState.activeChat])

    return (
        <ChatContainer>

            <ConversationHeader>
                <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name="Emily" />
                <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
                <ConversationHeader.Actions>
                    <VoiceCallButton />
                    <VideoCallButton />
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>

                <MessageSeparator>Saturday, 30 November 2019</MessageSeparator>

                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name={"Emily"} />
                </Message>
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "outgoing",
                    position: "single"
                }} />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "normal"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name={"Emily"} />
                </Message>
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "first"
                }} />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "normal"
                }} />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "normal"
                }} />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    direction: "outgoing",
                    position: "last"
                }} />

                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "first"
                }} avatarSpacer />
                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "last"
                }}>
                    <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name={"Emily"} />
                </Message>

                <MessageSeparator>Saturday, 31 November 2019</MessageSeparator>

                <Message model={{
                    message: "Hello my friend",
                    sentTime: "15 mins ago",
                    sender: "Emily",
                    direction: "incoming",
                    position: "single"
                }}>
                    <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} name={"Emily"} />
                </Message>
                {messages.map((m, i) => <Message key={i} model={m} />)}

            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} autoFocus={true} />
            {/* <InputToolbox>
                                    <AttachmentButton />
                                    <SendButton />
                                </InputToolbox> */}
        </ChatContainer>

    )

}

export { ChatWrapper }