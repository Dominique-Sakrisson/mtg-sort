import React, {useEffect, useState} from 'react'
import { getSets } from '../../utils/mtgApi';
import MtgSetItem from '../MtgSetItem/MtgSetItem';
import './mtgSetList.css'
const MtgSetsList = () => {
    const [mtgSets, setMtgSets] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(async() => {
        const mtg = await getSets();
        console.log(mtg);
        setMtgSets(mtg);
        setLoading(false);
        return () => {
        }
    },[])
    
    return(<div className='setDiv'>
            <h3>Sets</h3>
            <ul className='setList'>
                {loading ? 'sets loading' :
                   mtgSets.map((item) => <MtgSetItem  key={item.name} mtgSet={item}/>) 
                }
            </ul>
        </div>
)
}

 export default MtgSetsList;
