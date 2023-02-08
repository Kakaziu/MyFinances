import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import ModalReducer from './modules/modal/ModalReducer'
import UserReducer from "./modules/user/UserReducer";
import TransitionReducer from "./modules/transition/TransitionReducer";

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    ModalReducer,
    UserReducer,
    TransitionReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
