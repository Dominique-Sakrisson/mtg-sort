import React, {useState, useEffect} from 'react'
import FeatureCard from '../CardItem/FeatureCard'
import  '../CardItem/cardItem.css'

const FeatureBanner = ({card}) => {
    const [featSet, setFeatSet] = useState(new Set())
    useEffect(() => {
        console.log(featSet);
        return () => {
        console.log('');
        }
    }, [featSet])
    let cardPropArray= []
    if(card) card.style= true;
    if(card) {
        for(const key in card){
            featSet.add({key: key, value: card[key]})
        }
    }
        console.log(card);
    
    console.log(cardPropArray);
    return(<>
        {card?
            <FeatureCard card={card}/>
           
             : ''}
    </>
)}

export default FeatureBanner;
