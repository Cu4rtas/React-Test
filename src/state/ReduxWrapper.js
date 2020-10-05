import React from 'react';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'position' ]
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
