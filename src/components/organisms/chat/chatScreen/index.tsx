import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { RootState } from '../../../../shared/hooks';
import { messages } from '../../../../shared/localize';
import { loadChatList } from '../../../../store/actions';
import { TextLabel } from '../../../shared';
import { ChatWrapper } from '../chatContainerWrapper';
import { ChatList } from '../chatList';

function ChatScreen() {
  const chatState = useSelector((state: RootState) => state.chatReducer);
  const userState = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState?.user?.username) {
      dispatch(loadChatList({ user_key: userState?.user?.username }));
    }
  }, [userState?.user?.username]);

  return (
    <div>
      <Container>
        <Row className="chat-border">
          <TextLabel
            className="primary-font font-size-large font-bold"
            text={messages.appointmentPage.title}
          />{' '}
        </Row>
        {chatState.chats.length > 0 ? (
          <Row>
            <Col xs="3">
              <Row>{/* TODO:Chat search */}</Row>
              <Row>
                <ChatList chats={chatState.chats} />
              </Row>
            </Col>
            <Col xs="9">
              <div style={{ height: '85vh' }}>
                <ChatWrapper />
              </div>
            </Col>
          </Row>
        ) : (
          <Row>No Chats</Row>
        )}
      </Container>
    </div>
  );
}

export { ChatScreen };
