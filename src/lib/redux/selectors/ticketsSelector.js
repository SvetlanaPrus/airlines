// Селекторы — это просто геттеры для получения некоторых частей из целого стейта,
// т.е. функции вида (State) => SubState. Обычно мы пишем селекторы чтобы не обращаться к стейту напрямую,
// а так же чтобы потом можно было комбинировать или мемоизировать результаты работы этих селекторов.

// tickets - it's reducer, renamed in rootReducer

export const selectTickets = (state) => state.tickets;

export const selectFilter = (state) => {
    const {allStops, noStops, oneStop, twoStops, threeStops, allCompanies,S7Airlines, Xiamenair} = state.tickets;
    return {
        allStops,
        noStops,
        oneStop,
        twoStops,
        threeStops,
        allCompanies,
        S7Airlines,
        Xiamenair,
    };
};
export const selectSorting = (state) => {
    const { cheep, fast, optimal } = state.tickets;
    return {
        cheep,
        fast,
        optimal
    };
};



