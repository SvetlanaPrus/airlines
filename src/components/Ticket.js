import {formatTime} from "../helpers/formatTime.js";
import {getCompanyLogo} from "../helpers/getCompanyLogo";
import {useSegments} from "../hooks/useSegments";

export function Ticket(props){
    const {price, companyId, segments} = props;
    const logo = getCompanyLogo(companyId);

    const data = useSegments();
    let targetSegments = [];

    for(const id of segments){
        targetSegments.push(data.filter(el => el.id === id));
    }

    let totalTime = 0, totalStops = [];

    for(const obj of targetSegments){
        totalTime = totalTime + obj[0].duration; // => 50400000
        totalStops = totalStops.concat(obj[0].stops);
    }

    let time = formatTime(totalTime);

    totalStops = [...new Set(totalStops)];    // => ["HKT", "EKV", "PTB"]
    const numberStops = totalStops.length;    // => 3
    const nameStops = totalStops.join(", ");  // => "HKT, EKV, PTB"

    return(
        <>
            <section className="header">
                <p id="text">{price} P</p>
                <img src={`../img/${logo}`} alt="Logo"/>
            </section>

            <section className="offer">
                <li className="route">
                    <span id="text-top">MOW - EKT</span>
                    {/* (Line below) It must be changed to dynamic value! */}
                    <span id="text-bottom">10:45 - 08:00</span>
                </li>
                <li className="length">
                    <span id="text-top">В ПУТИ</span>
                    <span id="text-bottom">{time[0]}ч {time[1]}м</span>
                </li>
                <li className="stops">
                    <span id="text-top">{numberStops} ПЕРЕСАДКИ</span>
                    <span id="text-bottom">{nameStops}</span>
                </li>
            </section>
        </>
    )
}
