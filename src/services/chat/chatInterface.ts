export interface IConversation {
  chatKey: string;
  participantImage: string;
  participantName: string;
  serviceName: string;
  jobTitle: string;
  isActive: boolean;
  messages?: IMessage[];
}

export interface IMessage {
  message: string;
  messageKey: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  messageType: string;
  senderKey: string;
}
