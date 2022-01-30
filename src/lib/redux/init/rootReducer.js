import { combineReducers } from 'redux';
import {ticketsReducer} from "../reducers/ticketsReducer";

export const rootReducer = combineReducers({
    tickets: ticketsReducer,
});
