// import * as json from "src/mock-data/tickets.json";
import {useState} from "react";

export function Filter() {
    const [all, setAll] = useState(true);
    const [noStops, setNoStops] = useState(false);
    const [oneStop, setOneStop] = useState(false);
    const [twoStops, setTwoStops] = useState(false);
    const [threeStops, setThreeStops] = useState(false);
    const [value, setValue] = useState("all");
    // const tickets = json.default;

    return (
        <>
            <div className="filter-stop">
                <p className="title">КОЛИЧЕСТВО ПЕРЕСАДОК</p>

                {/*All*/}
                <div className="unit">
                    <input id="checkbox" type="checkbox" checked={all} onChange={() => setAll(!all)} />
                    <label id="text">Все</label>
                </div>

                {/*No stops*/}
                <div className="unit">
                    <input id="checkbox" type="checkbox" checked={noStops} onChange={() => setNoStops(!noStops)} />
                    <label id="text">Без пересадок</label>
                </div>

                {/*One stop*/}
                <div className="unit">
                    <input id="checkbox" type="checkbox" checked={oneStop} onChange={() => setOneStop(!oneStop)} />
                    <label id="text">1 пересадка</label>
                </div>

                {/*Two stops*/}
                <div className="unit">
                    <input id="checkbox" type="checkbox" checked={twoStops} onChange={() => setTwoStops(!twoStops)} />
                    <label id="text">2 пересадки</label>
                </div>

                {/*Three stops*/}
                <div className="unit">
                    <input id="checkbox" type="checkbox" checked={threeStops} onChange={() => setThreeStops(!threeStops)}/>
                    <label id="text">3 пересадки</label>
                </div>
            </div>

            <div className="filter-company">
                <p className="title">КОМПАНИЯ</p>

                {/*All companies*/}
                <div className="unit">
                    <input id="radiobox" type="radio" value="all" checked={value === "all"}
                           onChange={(e) => setValue(e.target.value)} />
                    <label id="text">Все</label>
                </div>

                {/*S7 Airlines*/}
                <div className="unit">
                    <input id="radiobox" type="radio" value="S7 Airlines" checked={value === "S7 Airlines"}
                           onChange={(e) => setValue(e.target.value)} />
                    <label id="text">S7 Airlines</label>
                </div>

                {/*XiamenAir*/}
                <div className="unit">
                    <input id="radiobox" type="radio" value="XiamenAir" checked={value === "XiamenAir"}
                           onChange={(e) => setValue(e.target.value)} />
                    <label id="text">XiamenAir</label>
                </div>
            </div>
        </>
    );
}
