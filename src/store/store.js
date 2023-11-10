import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore /* compose, applyMiddleware */, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import logger from 'redux-logger';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
	...getDefaultMiddleware({
		serializableCheck: false,
	}),
	logger,
	sagaMiddleware,
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
