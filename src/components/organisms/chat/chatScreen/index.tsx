import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { messages } from '../../../../shared/localize';
import { TextLabel } from '../../../shared';
import { ChatWrapper } from '../chatContainerWrapper';
import { ChatList, IConversation } from '../chatList';


function ChatScreen() {

    const [activeChat, setActiveChat] = useState<IConversation>();

    return (
        <div>
            <Container>
                <Row className='chat-border'>
                    <TextLabel
                        className="primary-font font-size-large font-bold"
                        text={messages.appointmentPage.title}
                    />{' '}
                </Row>
                <Row>
                    <Col xs="3">
                        <div>//chat search</div>
                        <ChatList handleChatSelect={setActiveChat} />
                    </Col>
                    <Col xs="9" >
                        <div style={{ height: '85vh' }}>
                            <ChatWrapper activeChat={activeChat} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export { ChatScreen };


