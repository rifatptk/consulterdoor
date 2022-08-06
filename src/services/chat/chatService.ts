import { http } from '..';
import { ISendMessageProps } from './chatInterface';
// import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';

async function getChatsList({ userKey }: { userKey: string }) {
  try {
    const res = await http.get('chat', {
      //TODO:Need to set userKey
      params: {
        user_key: '1578a256-d447-11ec-9d64-0242ac120002',
      },
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

export { getChatsList, getChat, sendMessage };
