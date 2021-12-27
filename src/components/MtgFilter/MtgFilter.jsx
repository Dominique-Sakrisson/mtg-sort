import React, {useState} from 'react'
import  {getCards}  from '../../utils/mtgApi'
import CardItem from '../CardItem/CardItem'
import './mtgFilter.css'

const MtgFilter = ({updateFeaturedBanner}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchFilter, setSearchFilter] = useState({power: ''})

    async function handleGetCards() {
        setLoading(true)
        const {cards} = await getCards(searchFilter)
        setData(cards)
        setLoading(false)
    }

    function handlePowerChange(e){
        console.log(e.target.value);
         setSearchFilter(prevFilter => {
            prevFilter.power = e.target.value;
            return prevFilter
        })
    }
    return (
        <div>
            <button onClick={handleGetCards}>Get cards</button>
            
            <label htmlFor="power">
                power
                <input id='power' onChange={handlePowerChange} type="number" />
            </label>
            <ul className='cardList'>
                {loading ? 'loading' :
                    data.map((item) => <CardItem updateFeaturedBanner={updateFeaturedBanner} key={item.name} card={item}/>) 
                }
            </ul>
        </div>
    ) 
}

export default MtgFilter;
