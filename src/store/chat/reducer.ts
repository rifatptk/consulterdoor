import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatService } from '../../services';
import {
  IConversation,
  ISendMessageProps,
} from '../../services/chat/chatInterface';

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

const sendMessage = createAsyncThunk(
  'chatSlice/sendMessage',
  async (params: ISendMessageProps) => {
    return chatService.sendMessage(params);
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
    builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
      const currentChats = JSON.parse(JSON.stringify(state.chats));
      const modifiedChatArray = currentChats.map((chat: any) => {
        if (chat.chatKey === payload.conversationKey) {
          chat.messages.push(payload.message);
        }
        return chat;
      });
      state.chats = modifiedChatArray;
    });
    builder.addCase(loadChat.fulfilled, (state, { payload }) => {
      const currentChats = JSON.parse(JSON.stringify(state.chats));
      const modifiedChat = currentChats.map((chat: any) => {
        if (chat.chatKey === payload.chatKey) {
          chat.messages = payload.messages;
        }
        return chat;
      });
      state.chats = modifiedChat;
    });
  },
});

const chatReducer = chatSlice.reducer;
const { setActiveChat } = chatSlice.actions;

export { chatReducer, loadChatList, sendMessage, loadChat, setActiveChat };
