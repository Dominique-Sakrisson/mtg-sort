import React, {useState, useEffect} from 'react'
import FeatureCard from '../CardItem/FeatureCard'
import  '../CardItem/cardItem.css'

const FeatureBanner = ({card}) => {
    const [featSet, setFeatSet] = useState(new Set())
    useEffect(() => {
        return () => {
        }
    }, [featSet])

    let cardPropArray= []
    if(card) card.style= true;
    if(card) {
        for(const key in card){
            featSet.add({key: key, value: card[key]})
        }
    }
        
    
   
    return(<>
        {card?
            <FeatureCard card={card}/>
           
             : ''}
    </>
)}

export default FeatureBanner;
