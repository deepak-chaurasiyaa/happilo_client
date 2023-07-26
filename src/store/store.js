import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer/root.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // you can choose different storage mechanisms, such as local storage or session storage

const persistConfig = {
  key: 'root', // key used to access the persisted state in storage
  storage, // storage mechanism to use, e.g., local storage or session storage
  version: 1, // version number of the persisted state, useful for migrations
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
