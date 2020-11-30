import React from 'react'

import {Cards,Chart,CountryPicker, StatePicker} from './components'
import styles from './App.module.css'
import {fetchData } from './api'
import cImage from './Images/corona.jpg'

class App extends React.Component{
    state = {
        data: {},
        country: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData })
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country)
        this.setState({data:fetchedData, country: country})
        console.log(fetchedData)
       
    }
    render(){
        const {data, country } = this.state
        return(
            <div className= {styles.container}>
                <StatePicker />
                <img  className={styles.cImage} src={cImage} alt="COVID-19"/>
               <Cards data= {data} />
               <CountryPicker handleCountryChange ={this.handleCountryChange} />
               <Chart data ={data} country={country}/>
            </div>
        )
    }
}
//Testing npm dependencies and child processes. 
const cp = require("child_process");
const verify = () => cp.exec("npm ls", error =>{
    if(error){
        console.error("Dependency mismatch between package.json and lock. Run: npm install");
        throw error;
    }
    console.log("Dependencies verified =)");
});
export default App