import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { chatReducer } from './chat/reducer';

import { commonReducer } from './common/reducer';
import { consultantReducer } from './consultant/reducer';
import { consultServiceReducer } from './consultService/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  commonReducer,
  userReducer,
  consultServiceReducer,
  consultantReducer,
  chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['commonReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
