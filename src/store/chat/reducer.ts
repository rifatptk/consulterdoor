import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatService } from '../../services';
import { IConversation } from '../../services/chat/chatInterface';

interface IReduxChatState {
  chats: IConversation[];
  activeChat: string;
}

const initialState: IReduxChatState = {
  chats: [],
  activeChat: '',
};

const loadChatList = createAsyncThunk(
  'chatSlice/loadChatList',
  async (data: any) => {
    return chatService.getChatsList(data);
  }
);

const loadChat = createAsyncThunk(
  'chatSlice/loadChat',
  async (chatKey: string) => {
    return chatService.getChat(chatKey);
  }
);

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<string>) => {
      state.activeChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadChatList.fulfilled, (state, { payload }) => {
      state.chats = payload.data;
      state.activeChat = payload.data[0].chatKey;
    });
    builder.addCase(loadChat.fulfilled, (state, { payload }) => {
      const currentChats = JSON.parse(JSON.stringify(state.chats));
      const modifiedChat = currentChats.map((chat: any) => {
        if (chat.chatKey === payload.data.key) {
          chat.messages = payload.data.messages;
        }
        return chat;
      });
      state.chats = modifiedChat;
    });
  },
});

const chatReducer = chatSlice.reducer;
const { setActiveChat } = chatSlice.actions;

export { chatReducer, loadChatList, loadChat, setActiveChat };
