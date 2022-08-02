import { http } from '..';
// import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';

async function getChatsList({ userKey }: { userKey: string }) {
  try {
    const res = await http.get('chat', {
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
    const res = await http.get('chat/getChat', {
      params: {
        conversationKey: chatKey,
      },
    });
    return res.data.data;
  } catch (err) {
    throw err;
  }
}

export { getChatsList, getChat };
