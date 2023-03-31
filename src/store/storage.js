import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const history = createBrowserHistory();

const persistConfig = { 
    key: 'root',
     storage, 
}

 const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   );

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk) 
)
const  persistor = persistStore(store); 

export {store, persistor}
//  export {store}