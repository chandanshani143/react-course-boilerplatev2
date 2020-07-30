import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';                     //thunk allow to do asynchronous action i.e for eg. making firebase call first and then dispatching it to redux-store
import authReducer from '../reducers/auth';
                  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    //store creation
    const store = createStore(
        combineReducers({ 
            auth: authReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
};