/* This file contaiine all the common functions */

export function secondsToHms(seconds) {
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? "h " : "h ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? "min " : "min ") : "";
    const sDisplay = (h === 0 && s > 0 ) ? s + (s === 1 ? "sec" : "sec") : "";
    return hDisplay + mDisplay + sDisplay; 
}