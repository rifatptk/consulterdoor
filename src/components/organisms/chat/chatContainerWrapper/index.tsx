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
import { APPOINTMENT_STATUS, MESSAGE_TYPES } from '../../../../shared/constant';
import { RootState } from '../../../../shared/hooks';
import { messages as texts } from '../../../../shared/localize';
import { convertTime12to24 } from '../../../../shared/utils';
import {
  loadChat,
  sendAppointmentAcceptance,
  sendMessage,
} from '../../../../store/actions';
import {
  RequestAppointmentAcceptanceCard,
  SelectableTimeslots,
  WaitForResponseCard,
} from '../../../molecules';
import { CalenderModal } from '../../calenderModal';
import {
  ConfirmationModal,
  IConfirmationModalProps,
} from '../../confirmationModal';
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
  const [timeSlotsforSelect, setTimeSlotsforSelect] = useState<ITimeslot[]>([]);
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [confirmationModalText, setConfirmationModalText] =
    useState<string>('');
  const [isHaveTextInput, setIsHaveTextInput] = useState<boolean>(false);
  const [modalConfirmFn, setModalConfirmFn] = useState<(props: any) => any>();
  const [modalDeclineFn, setModalDeclineFn] = useState<(props: any) => any>();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const chatState = useSelector((state: RootState) => state.chatReducer);

  const handleSend = (message: string) => {
    const params: ISendMessageProps = {
      conversationKey: chatState.activeChat,
      message,
      messageType: MESSAGE_TYPES.TEXT,
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

  const handleAcceptance = (response: 'ACCEPTED' | 'REJECTED') => {
    const releventAppointmentKey = chatState.chats.filter(
      (value) => value.chatKey === chatState.activeChat
    )[0].lastAppointment.appointmentkey;
    const params: IAppointmentResponseProps = {
      appointmentKey: releventAppointmentKey,
      status: response,
    };
    dispatch(sendAppointmentAcceptance(params));

    if (response === 'ACCEPTED') {
      setIsCalenderOpen(true);
    }
  };

  const formatTimeSlotTime = (timeSlot: ITimeslot) => {
    const date = timeSlot.date.toISOString().split('T')[0];
    const startTime = convertTime12to24(timeSlot.time.split('-')[0].trim());
    const endTime = convertTime12to24(timeSlot.time.split('-')[1].trim());
    const offset = new Date().getTimezoneOffset();
    const offSetValue = Math.abs(offset);
    const offsetSign = offset > 0 ? '-' : '+';
    const offsetString = `${offsetSign}${Math.floor(
      offSetValue / 60
    ).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${offSetValue % 60}`;
    const formattedTime = `${date}T${startTime}${offsetString}|${date}T${endTime}${offsetString}`;

    return formattedTime;
  };

  // TODO:Need to change time slots to handle inter date timeslots
  const handleScheduleSubmit = (timeslots: ITimeslot[]) => {
    handleCalenderToggle();
    const formattedTimes = timeslots.map((timeSlot) =>
      formatTimeSlotTime(timeSlot)
    );

    const params: ISendMessageProps = {
      conversationKey: chatState.activeChat,
      message: 'Please select your preferred time slot',
      messageType: MESSAGE_TYPES.TIME_SLOT_SUGGEST,
      appointmentKey: chatDetail?.lastAppointment.appointmentkey,
      data: {
        options: formattedTimes,
      },
    };
    dispatch(sendMessage(params));
  };

  const convertTimeToTimeSlot = (time: string) => {
    const [startTimeStr, endTimeStr] = time.split('|');
    const startTime = new Date(startTimeStr);
    const endTime = new Date(endTimeStr);
    const timeSlot: ITimeslot = {
      date: startTime,
      time: `${startTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })} -  ${endTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}`,
    };
    return timeSlot;
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
      if (
        activeChat?.lastAppointment?.appointmentStatus === 'SCHEDULING' &&
        activeChat.role === 'client' &&
        activeChat.messages
      ) {
        // set time slots
        const lastMessage =
          activeChat.messages[activeChat.messages?.length - 1];
        const times = lastMessage?.data?.options;

        const timeSlots = times?.map((time: string) =>
          convertTimeToTimeSlot(time)
        );
        if (timeSlots) {
          setTimeSlotsforSelect(timeSlots);
        }
      }
    }
  }, [chatState.chats]);

  const handleTimeslotSubmit = (selectedTimeSlot: ITimeslot) => {
    const params: ISendMessageProps = {
      conversationKey: chatState.activeChat,
      message: `Appointment has been scheduled to ${selectedTimeSlot.date}`,
      messageType: MESSAGE_TYPES.TIME_SLOT_FINALIZED,
      appointmentKey: chatDetail?.lastAppointment.appointmentkey,
      data: {
        options: [formatTimeSlotTime(selectedTimeSlot)],
      },
    };
    // handleConfirmationModal();
    dispatch(sendMessage(params));
    setIsConfirmationModalOpen(false);
  };

  const handleRequestAnotherTimeslot = (inputText: any) => {
    const params: ISendMessageProps = {
      conversationKey: chatState.activeChat,
      message: inputText.inputText
        ? inputText.inputText
        : 'Can you please suggest another ',
      messageType: MESSAGE_TYPES.TIME_SLOT_SUGGESTION_CHANGE_REQUEST,
      appointmentKey: chatDetail?.lastAppointment.appointmentkey,
    };
    dispatch(sendMessage(params));
    setIsConfirmationModalOpen(false);
  };

  const handleConfirmationModal = (props: IConfirmationModalProps) => {
    setIsConfirmationModalOpen(props.modalIsOpen ? props.modalIsOpen : true);
    setIsHaveTextInput(props.haveTextInput);
    setConfirmationModalText(props.text);
    setModalConfirmFn(props.confirmFn);
    setModalDeclineFn(props.declineFn);
  };

  // Render input area according to role and state of appointment
  const RenderAnswer = () => {
    if (chatDetail?.role === 'client') {
      if (
        chatDetail?.lastAppointment.appointmentStatus ===
        APPOINTMENT_STATUS.REQUESTED
      ) {
        return (
          <WaitForResponseCard text={texts.appointmentPage.waitForResponse} />
        );
      } else if (
        chatDetail?.lastAppointment.appointmentStatus ===
          APPOINTMENT_STATUS.ACCEPTED ||
        chatDetail?.lastAppointment.appointmentStatus ===
          APPOINTMENT_STATUS.TIME_SLOT_SUGGESTION_REJECTED
      ) {
        return (
          <WaitForResponseCard text={texts.appointmentPage.waitForTimeSlots} />
        );
      } else if (
        chatDetail?.lastAppointment.appointmentStatus ===
        APPOINTMENT_STATUS.SCHEDULING
      ) {
        return (
          <SelectableTimeslots
            timeslots={timeSlotsforSelect}
            handleSubmit={handleConfirmationModal}
            timeSlotConfirmFn={handleTimeslotSubmit}
            requestAnotherSlotConfirmFn={(inputText: string) =>
              handleRequestAnotherTimeslot(inputText)
            }
            declineFn={() => setIsConfirmationModalOpen(false)}
          />
        );
      }
    } else {
      if (
        chatDetail?.lastAppointment.appointmentStatus ===
        APPOINTMENT_STATUS.REQUESTED
      ) {
        return (
          <RequestAppointmentAcceptanceCard
            handleAcceptance={handleAcceptance}
          />
        );
      } else if (
        chatDetail?.lastAppointment.appointmentStatus ===
          APPOINTMENT_STATUS.ACCEPTED ||
        chatDetail?.lastAppointment.appointmentStatus ===
          APPOINTMENT_STATUS.TIME_SLOT_SUGGESTION_REJECTED
      ) {
        return (
          <WaitForResponseCard
            text={texts.appointmentPage.suggestTimeSlot}
            action={setIsCalenderOpen}
          />
        );
      } else if (
        chatDetail?.lastAppointment.appointmentStatus ===
        APPOINTMENT_STATUS.SCHEDULING
      ) {
        return (
          <WaitForResponseCard
            text={texts.appointmentPage.waitForTimeSlotConfirmation}
          />
        );
      }
    }

    return (
      <MessageInput
        className="chat-input"
        placeholder="Type message here"
        onSend={handleSend}
        autoFocus={true}
      />
    );
  };
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
        <div is="MessageInput">
          <div className="chat-view-answer-container">
            <RenderAnswer />
          </div>
        </div>
      </ChatContainer>
      <CalenderModal
        isCalenderOpen={isCalenderOpen}
        handleSubmit={handleScheduleSubmit}
        handleToggle={handleCalenderToggle}
      />
      <ConfirmationModal
        modalIsOpen={isConfirmationModalOpen}
        setModalIsOpen={setIsConfirmationModalOpen}
        text={confirmationModalText}
        haveTextInput={isHaveTextInput}
        confirmFn={
          modalConfirmFn
            ? modalConfirmFn
            : () => setIsConfirmationModalOpen(true)
        }
        declineFn={
          modalDeclineFn
            ? modalDeclineFn
            : () => setIsConfirmationModalOpen(true)
        }
      />
    </>
  );
}

export default ChatWrapper;
