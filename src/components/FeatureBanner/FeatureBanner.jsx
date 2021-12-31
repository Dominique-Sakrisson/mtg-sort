import React, {useState} from 'react'
import FeatureCard from '../CardItem/FeatureCard'
import  '../CardItem/cardItem.css'

const FeatureBanner = ({card}) => {
    if(card) card.style= true
    return(<>
        {card?
            <FeatureCard card={card}/>
           
             : 'Search for cards'}
    </>
)}

export default FeatureBanner;
