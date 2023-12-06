import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore /* compose, applyMiddleware */, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { loggerMiddleware } from './middleware/logger';
import logger from 'redux-logger';

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
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
	loggerMiddleware,
	sagaMiddleware,
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
