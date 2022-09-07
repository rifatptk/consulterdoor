export interface IConversation {
  chatKey: string;
  participantImage: string;
  participantName: string;
  serviceName: string;
  jobTitle: string;
  isActive: boolean;
  status: string;
  role: string;
  messages?: IMessage[];
}

export interface IMessage {
  message: string;
  messageKey: string;
  status: string;
  isDeleted: boolean;
  isEditable: boolean;
  messageTime: string;
  messageType: string;
  direction: 'incoming' | 'outgoing';
  senderKey: string;
  senderName: string;
}

export interface ISendMessageProps {
  conversationKey: string;
  message: string;
  messageType: string;
  senderKey: string;
}

export interface IAppointmentResponseProps {
  conversationKey: string;
  response: 'ACCEPT' | 'REJECT';
}
