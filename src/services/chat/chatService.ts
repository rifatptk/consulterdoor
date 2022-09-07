import { http } from '..';
import { IAppointmentResponseProps, ISendMessageProps } from './chatInterface';
// import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';

async function getChatsList(user_key: { user_key: string }) {
  try {
    const res = await http.get('chat', {
      params: user_key,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function getChat(chatKey: string) {
  try {
    const res = await http.get('chat/getChatMessages', {
      params: {
        conversationKey: chatKey,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function sendMessage(params: ISendMessageProps) {
  try {
    const res = await http.post('chat/sendMessage', params);
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function sendAppointmentAcceptance(params: IAppointmentResponseProps) {
  try {
    const res = await http.post('chat/sendAppointmentAcceptance', params);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export { getChatsList, getChat, sendMessage, sendAppointmentAcceptance };
