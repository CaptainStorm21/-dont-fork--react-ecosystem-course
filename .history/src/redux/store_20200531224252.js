import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';
//stops resetting from a refresh
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    
}

const rootReducer = combineReducers(reducers);
const persistReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(rootReducer);
