import moment from 'moment';

export function getUnixTime(timestamp) {
    return moment.unix(timestamp).format("dddd, MMMM Do YYYY");
}

export function getKelvinToCelcius(temp) {
    return Math.floor(temp - 273.15);
}

