import {ticketsTypes} from '../types/ticketsTypes';

export const ticketsActions = Object.freeze({
    setFilter(payload) {
        return {
            type: ticketsTypes.SET_FILTER,
            payload,
        };
    },
    setSorting(payload) {
        return {
            type: ticketsTypes.SET_SORTING,
            payload,
        };
    },
    getTickets(payload) {
        return {
            type: ticketsTypes.GET_TICKETS,
            payload,
        };
    },
});











