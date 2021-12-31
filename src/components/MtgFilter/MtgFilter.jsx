import React, {useState} from 'react'

import CardItem from '../CardItem/CardItem'
import './mtgFilter.css'

const MtgFilter = ({updateSearchFilter}) => {
  
    const [searchFilter, setSearchFilter] = useState({power: ''})

    
    function handlePowerChange(e){
         setSearchFilter(prevFilter => {
            prevFilter.power = e.target.value;
            return prevFilter
        })
        updateSearchFilter(searchFilter)
    }
    return (
        <div>
            <label htmlFor="power">
                power
                <input id='power' onChange={handlePowerChange} type="number" />
            </label>
        </div>
    ) 
}

export default MtgFilter;
