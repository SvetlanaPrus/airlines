import {useTickets} from "../hooks/useTickets";

export function MenuTop(){
    const tickets = useTickets();

    // Price
    function sortCheep(){
        const sortTickCheep = tickets.sort((a,b) => a.price - b.price); // must be reviewed/changed
    }

    // Duration
    function sortFast(){
        const sortTickFast = tickets.sort((a,b) => a.segments.duration - b.segments.duration); // must be reviewed/changed
    }

    function sortOptimal(){
        const sortTickCheep = tickets.sort((a,b) => a.price - b.price); // must be reviewed
        const sortTickOptimal = tickets.sort((a,b) => a.segments.stops.length - b.segments.stops.length); // must be reviewed/changed
    }

    return(
        <span>
            <button onClick={sortCheep} className="top_menu top_menu_b1">САМЫЙ ДЕШЕВЫЙ</button>
            <button onClick={sortFast} className="top_menu top_menu_b2">САМЫЙ БЫСТРЫЙ</button>
            <button onClick={sortOptimal} className="top_menu top_menu_b3">ОПТИМАЛЬНЫЙ</button>
        </span>
    )
}
