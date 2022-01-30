// import {secondsToHours} from 'date-fns';
// import { millisecondsToHours } from 'date-fns'

// export const formatTime = (duration) => {
//     return millisecondsToHours(duration);
// }

export function formatTime(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    if(m === 0) m='00';
    return [h, m];
}


