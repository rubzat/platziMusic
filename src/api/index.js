import config from './config'
console.log(config.apikey);
const { apikey }  = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apikey}&format=json`
export default function  getArtistas(country) {
    const url = URL.replace(':country',country)
    return fetch(url)
        .then(res => res.json())
        .then(data => data.topartists)
}
