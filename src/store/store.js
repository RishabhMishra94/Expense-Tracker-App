import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import expensesReducer from './slices/expensesSlice';
import incomeReducer from './slices/incomeSlice';

const persistConfig = {
  key: 'root',
  storage, 
};

const rootReducer = combineReducers({
  expenses: expensesReducer,
  income: incomeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
