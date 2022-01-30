import {useTickets} from "../hooks/useTickets";
import {Ticket} from "./Ticket.js";
import {useSelector} from "react-redux";
import {selectFilter, selectSorting} from "../lib/redux/selectors/ticketsSelector";

export function Tickets(){
    const tickets = useTickets();

    const sorting = useSelector(selectSorting);
    const filter = useSelector(selectFilter);

    const offer = tickets.slice(0, 5)
        .map(el =>(
            <div className="ticket-container" key = {el.id}>
                <Ticket {...el}/>
            </div>
        ))

    return(
        <>
            {offer}
            <button id="btn" type="button" className="btn">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </>
    )
}
