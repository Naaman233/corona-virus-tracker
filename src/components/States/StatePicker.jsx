import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchStates } from '../../api'
import styles from './StatePicker.module.css'


export const StatePicker = ({handleStateChange}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchStates();
            setData(result);
            console.log(result);
        }
        fetchData();
    }, [])
    
    return (
        <FormControl className= {styles.formControl}>
            <NativeSelect defaultValue = "" onChange={(e) => handleStateChange(e.target.value)}>
                <option value ="">Global States</option>
    {data.map((state,i) => <option key = {i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
    
}  
export default StatePicker
/**
 * return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue = "" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
    {fetchedCountries.map((country, i) =><option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
 * 
 * 
 */

//     return (
//         <div>
//             <label htmlFor="states">States</label>
//             <select id="states">
//                 {data.map(state => <option key={state}>{state}</option>)}
//             </select>
//         </div>)
// })