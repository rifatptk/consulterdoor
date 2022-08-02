import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ChatWrapper } from '../chatContainerWrapper';
import { ChatList, IConversation } from '../chatList';


function ChatScreen() {

    const [activeChat, setActiveChat] = useState<IConversation>();

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" xs="4">
                        <ChatList handleChatSelect={setActiveChat} />
                    </Col>
                    <Col lg="8" xs="8" >
                        <div style={{ height: '90vh' }}>
                            <ChatWrapper activeChat={activeChat} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export { ChatScreen };


