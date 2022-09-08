import { IAppointment } from '../appointment/appointmentInterfaces';

export interface IConversation {
  chatKey: string;
  participantImage: string;
  participantName: string;
  serviceName: string;
  jobTitle: string;
  isActive: boolean;
  status: string;
  role: string;
  lastAppointment: IAppointment;
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
  data?: IMetaData;
}

export interface ISendMessageProps {
  conversationKey: string;
  message: string;
  messageType: 'TEXT' | 'TIME_SLOT_SUGGEST' | 'TIME_SLOT_FINALIZED';
  data?: IMetaData;
  appointmentKey?: string;
}

export interface IMetaData {
  options: string[];
}

export interface IAppointmentResponseProps {
  appointmentKey: string;
  status: 'ACCEPTED' | 'REJECTED';
}
