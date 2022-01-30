import * as json from '../mock-data/tickets.json';

export const useTickets = () => {
    const tickets = json.default;

    return Array.isArray(tickets) ? tickets : [];
};

