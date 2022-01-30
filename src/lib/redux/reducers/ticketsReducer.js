import {ticketsTypes} from "../types/ticketsTypes";

const initialState = {
    filter: {
        allStops: '',
        noStops: '',
        oneStop: '',
        twoStops: '',
        threeStops: '',
        allCompanies: '',
        S7Airlines: '',
        Xiamenair: '',
    },
    sorting: {
        cheep: '',
        fast: '',
        optimal: '',
    },
    tickets: []
};

// PROPISAT LOGIKU!!!!

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ticketsTypes.SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            };
        }
        case ticketsTypes.SET_SORTING: {
            return {
                ...state,
                sorting: action.payload,
            };
        }
        case ticketsTypes.GET_TICKETS: {
            return {
                ...state,
                tickets: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
