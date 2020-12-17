import React,{useState, useEffect} from 'react'
import {FormControl, MenuItem, Select, Card, CardContent} from '@material-ui/core'
import {InfoBox, Map} from './components'
import dotenv from 'dotenv'
import "./App.css"


function App(){
    dotenv.config();
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo ] = useState({});
    useEffect(()=> {
        
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
              .then((response) => response.json())
              .then((data) => {
                const countries = data.map((country) => ({
                  name: country.country, 
                  value: country.countryInfo.iso2 
                }));
                setCountries(countries);
              });
          };
          getCountriesData();
      }, []);
    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        console.log("Country Code: ", countryCode);
            /************************************************************************
             *  worldwide service = https://disease.sh/v3/covid-19/countries
             *  country = https://disease.sh/v3/covid-19/countries/{COUNTRY_CODE}
             ************************************************************************/
        const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' 
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setCountry(countryCode);
            setCountryInfo(data);

            console.log("Country Information: ", countryInfo);

        })

    }
    return (
        <div className="app">
            <div className="app__left">
            <div className="app__header">
                <h1>COVID-19 TRACKER</h1>
                <FormControl className="app__dropdown">
                    <Select varient="outlined" value={country} onChange={onCountryChange}>
                        <MenuItem value="worldwide">Worldwide</MenuItem>
                        {countries.map((country) =>{
                          return(
                          <MenuItem value={country.value}>{country.name}</MenuItem>
                          )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="app__stats">
                {/**
                 * InfoBoxs title = Coronavirus cases
                 * InfoBoxs tile = Coronavirus recoveries
                 * InfoBox title = Coronavirus deaths 
                 */}
                <InfoBox title="Coronavirus cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
                <InfoBox title ="Coronavirus recoveries" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
                <InfoBox title = "Coronavirus deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
            </div>
            <Map />
            </div>
            <Card className="app__right">
                <CardContent>
                    <h3>Live cases by Country</h3>
                {/**Table */}
                    <h3>Worldwide new cases</h3>
                {/** Graph */}
                </CardContent>
            </Card>
        </div>
    )
                    }

export default App
