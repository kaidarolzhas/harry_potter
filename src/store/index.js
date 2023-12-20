import { combineReducers, legacy_createStore as createStore } from 'redux';
import {quoteReducer} from './quoteReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    quote: quoteReducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
  