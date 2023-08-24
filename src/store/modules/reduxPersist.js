import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducers = persistReducer({
        key: 'NOME-DA-APLICACAO',
        storage,
        whitelist: ['example'], //qual módulo será salvo.
                                // 'example' está descrito dentro do método "combineReducers"
                                // no arquivo "rootReducer"
    },
        reducers
    );

    return persistedReducers;
};