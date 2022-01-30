import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

// here we can add middleware

export const store = createStore(
    rootReducer,
);
