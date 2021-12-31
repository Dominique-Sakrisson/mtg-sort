import React, {useState} from 'react'
import CardItem from '../CardItem/CardItem';
import  {getCards}  from '../../utils/mtgApi'
import './MtgCards.css'
const MtgCards = ({searchFilter, updateFeaturedBanner}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleGetCards() {
        setLoading(true)
        const {cards} = await getCards(searchFilter)
        setData(cards)
        setLoading(false)
    }

    return(<>
     <button onClick={handleGetCards}>Get cards</button>
<ul className='cardList'>
                {loading ? 'loading' :
                    data.map((item) => <CardItem updateFeaturedBanner={updateFeaturedBanner} key={item.name} card={item}/>) 
                }
            </ul>
    </>
)}

export default MtgCards;
