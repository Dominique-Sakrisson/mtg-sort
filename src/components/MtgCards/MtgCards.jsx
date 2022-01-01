import React, {useState} from 'react'
import CardItem from '../CardItem/CardItem';

import './MtgCards.css'
const MtgCards = ({cards}) => {
    return(<>
            <ul className='cardList'>
                {cards? 
                    cards.map((item) => <CardItem  key={item.name} card={item}/>) : ''
                }
            </ul>
    </>
)}

export default MtgCards;
