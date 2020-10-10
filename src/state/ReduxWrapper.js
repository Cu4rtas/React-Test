import React from 'react';
import rootReducer from '.';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
	blacklist: ['position'],
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = reduxCreateStore(persistedReducer);
const persistor = persistStore(store);

export default ({ element }) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{element}
		</PersistGate>
	</Provider>
);
