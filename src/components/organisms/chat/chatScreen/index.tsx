import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { RootState } from '../../../../shared/hooks';
import { messages } from '../../../../shared/localize';
import { TextLabel } from '../../../shared';
import { ChatWrapper } from '../chatContainerWrapper';
import { ChatList, IConversation } from '../chatList';

function ChatScreen() {

    const [activeChat, setActiveChat] = useState<IConversation>();

    const chatState = useSelector(
        (state: RootState) => state.chatReducer
    );

    return (
        <div>
            {chatState?.chats?.length > 0 ? <Container>

                <Row className="chat-border">
                    <TextLabel
                        className="primary-font font-size-large font-bold"
                        text={messages.appointmentPage.title}
                    />{' '}
                </Row>
                <Row>
                    <Col xs="3">
                        <Row>
                            {/* TODO:Chat search */}

                        </Row>
                        <Row>
                            <ChatList handleChatSelect={setActiveChat} />
                        </Row>

                    </Col>
                    <Col xs="9" >
                        <div style={{ height: '85vh' }}>
                            <ChatWrapper activeChat={activeChat} />
                        </div>
                    </Col>
                </Row>

            </Container> : <div>No chats</div>}

        </div>

    );
}

export { ChatScreen };
