import * as axios from 'axios'
const COVID19_WORLDWIDE_MANAGEMENT = process.env.COVID19_WORLDWIDE_MANAGEMENT
const COVID19_STATEWIDE_MANAGEMENT = process.env.COVID19_STATEWIDE_MANAGEMENT

const url = 'https://covid19.mathdro.id/api'
const api = 'https://disease.sh/v3/covid-19'

 export const fetchData  = async (country) =>{
     let changeableUrl = url;
     if(country){
         changeableUrl = `${url}/countries/${country}`
     }


    try{
         const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
        //destructured data 
        const modifiedData  ={
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData
        
    }catch(error){

    }
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData)=>({

            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData

    }catch(error){

    }
}

export const fetchcountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) =>country.name)
    }catch(error){
        console.log(error)
    }
}

export const fetchStateData = async (state) => {
    let stateChangeableUrl = api;
    if(state){
        stateChangeableUrl = `${api}/states/${state}`
    }
    try{
        const {stateData:{state,updated,cases,todayCases,deaths,todayDeaths,recovered,active,population}} = axios.get(stateChangeableUrl);
        //destructured data
        const modifiedStateData = {
            state,
            active,
            cases,
            todayCases,
            updated,
            recovered,
            deaths,
            todayDeaths,
            population
        }
        return modifiedStateData;

    }catch(error){
        console.log(error);
    }
}

export const fetchDailyStateData = async () => {
    try{
        const {stateData} = await axios.get(`${api}/states`);
        const modifiedStateData = stateData.map((dailyStateData)=>({
            State: dailyStateData.state,
            Active: dailyStateData.active,
            Cases: dailyStateData.state,
            TodayCases: dailyStateData.todayCases,
            updated: dailyStateData.updated,
            recovered: dailyStateData.recovered,
            Deaths: dailyStateData.deaths,
            TodayDeaths: dailyStateData.todayCases,
            Population: dailyStateData.population
        }))
        return modifiedStateData;
        
    }catch(error){
        console.log(error);
    }
}

export const fetchStates = async () => {
    try{
        const {data} = await axios.get(`${api}/states`);
        return data.map(({state})=>state)
    }catch(error){
        console.log(error);
    }
}

