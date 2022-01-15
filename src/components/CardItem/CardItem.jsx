import React from 'react'
import './cardItem.css'
import blackMana from '../../assets/manaColors/black.png'
import blueMana from '../../assets/manaColors/blue.png'
import greenMana from '../../assets/manaColors/green.png'
import redMana from '../../assets/manaColors/red.png'
import whiteMana from '../../assets/manaColors/white.png'
import colorlessMana from '../../assets/manaColors/colorless.png'

const CardItem = ({card, updateFeaturedBanner}) => {

    function returnCostImg(cost){
        let manaCost= [];
        if(cost.r > 0){
            for(let i = 0; i < cost.r; i++){
                manaCost.push(<img src={redMana} alt="" />)
            }
        }
        if(cost.b > 0){
            for(let i = 0; i < cost.b; i++){
                manaCost.push(<img src={blackMana} alt="" />)
            }
        }
        if(cost.u > 0){
            for(let i = 0; i < cost.u; i++){
                manaCost.push(<img src={blueMana} alt="" />)
            }
        }
        if(cost.g > 0){
            for(let i = 0; i < cost.g; i++){
                manaCost.push(<img src={greenMana} alt="" />)
            }
        }
        if(cost.w > 0){
            for(let i = 0; i < cost.w; i++){
                manaCost.push(<img src={whiteMana} alt="" />)
            }
        }
        if(cost.plain > 0){
           manaCost.push(<>
           <span className='plainMana'>{cost.plain}</span>
            <img src={colorlessMana} alt="" />
           </>)
        } else if(cost.plain === 0){
            <span>{cost.plain}</span>
            manaCost.push(<img src={colorlessMana} alt="" />)
        }
        
        return manaCost;
    }
    function getManaCost(card){
        if(card){
            const manaCostStr = card.manaCost;
            let cost = {
                r: 0,
                b: 0,
                u: 0,
                g: 0,
                w: 0,
                plain: 0
            }
            try {
                for(let c of manaCostStr){
                    if(c <= 20){
                        cost.plain = c;
                    }
                    if(c === 'R'){
                        cost.r++;
                    } else if(c === 'B'){
                        cost.b++;
                    } else if(c === 'U'){
                        cost.u++;                    
                    } else if(c === 'G'){
                        cost.g++;
                    } else if(c === 'W'){
                        cost.w++;
                    } 
                }
                
            } catch (error) {
                
            }
            const returnThis = returnCostImg(cost);
            return returnThis;
        }
    }
    function cardBorder(e){
        let cardStyle = e.target.style.boxShadow;
        if(cardStyle === 'black 5px 10px 20px'){
            e.target.style.boxShadow = ''    
        } else{
            e.target.style.boxShadow = '5px 10px 20px black'    
        }
        
    }
    return (
        <li className='cardItem'>
            <img onClick={cardBorder} onMouseOut={cardBorder} src={card.imageUrl} alt={`card: '${card.name}'`} />
        </li>
    )
}
export default CardItem;
