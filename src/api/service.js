import * as axios from 'axios'
const COVID19_WORLDWIDE_MANAGEMENT = process.env.COVID19_WORLDWIDE_MANAGEMENT
const COVID19_STATEWIDE_MANAGEMENT = process.env.COVID19_STATEWIDE_MANAGEMENT

export async function getWorldWide(){
    return await axios.default.get(`${COVID19_WORLDWIDE_MANAGEMENT}`);
}

export async function getStateWide(){
    return await axios.default.get(`${COVID19_STATEWIDE_MANAGEMENT}`)
}