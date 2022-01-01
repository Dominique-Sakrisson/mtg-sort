import React, {useState, useEffect} from 'react'
import  {getCards}  from '../../utils/mtgApi'
import CardItem from '../CardItem/CardItem'
import './mtgFilter.css'

const MtgFilter = ({updateSearchFilter, setCards, handleGetCards}) => {
  
    const [searchFilter, setSearchFilter] = useState({power: ''})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState({
        power: false, toughness: false, manaCost: false, colors: false, type: false, subtypes: false, rarity: false, setName: false}
    );

    // async function handleGetCards() {
    //     setLoading(true)
    //     const {cards} = await getCards(searchFilter)
    //     setData(cards)
    //     setLoading(false)
    // }
    
    useEffect(() => {
        if(data){
            setCards(data)
        }
        return () => {
         
        }
    }, [data])

    function handlePowerChange(e){
        setSearchFilter(prevFilter => {
            prevFilter.power = e.target.value;
            return prevFilter
        })
        updateSearchFilter(searchFilter)
    }

    function handleManaCostChange(e){
        setSearchFilter(prevFilter => {
            prevFilter.power = e.target.value;
            return prevFilter
        })
        updateSearchFilter(searchFilter)
    }

    useEffect(() => {
        if(active.power){
            const input = document.querySelectorAll('.power')
            console.log(input);
            input[1].removeAttribute('disabled')
        }
        if(!active.power){
            const input = document.querySelectorAll('.power')
            console.log(input);
            input[1].setAttribute('disabled', 'true')
        }
        if(active.toughness){
            const input = document.querySelectorAll('.toughness')
            console.log(input, 'toughness is true');
            input[1].removeAttribute('disabled')
        }
        if(!active.toughness){
            const input = document.querySelectorAll('.toughness')
            console.log(input);
            input[1].setAttribute('disabled', 'true')
        }


        // if(active.toughness){
        //     const input = document.getElementById('power')
        //     input.removeAttribute('disabled')
        // }
        return () => {
            console.log();
        }
    }, [active])

function handleSetSearchFilter(){
  updateSearchFilter(searchFilter)
}
    function handleFilterCase(e){
        const el = e.target.attributes.id.value;
        console.log(active[el]);
        console.log(el);
        if(active[el] === false) {
            console.log('herrooo');
            setActive((prevActive) => {return {...prevActive, [el]: true}});
            return
        }
        if(active[el] === true) {
            console.log('herroeeeeeo');
            setActive((prevActive) => {return {...prevActive, [el]: false}});
            return
        }
    }

    return (
        <div className='filter'>
            <h2>Search</h2>
            <div className="inputs">
                <label htmlFor="power">
                    <input id='power' className='power' type='checkbox' onClick={handleFilterCase} value={active}></input>
                    power
                    <input id='power' className='power' disabled onChange={handlePowerChange} type="number" />
                </label>
                <label htmlFor="Toughness">
                    <input id='toughness' onClick={handleFilterCase} type='checkbox' className='toughness'></input>
                    Toughness
                    <input id='Toughness' disabled className='toughness' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="manaCost">
                    <input type='checkbox'></input>
                    Mana Cost
                    <input id='manaCost' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="colors">
                    <input type='checkbox'></input>
                    colors
                    <input id='colors' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="type">
                    <input type='checkbox'></input>
                    type
                    <input id='type' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="subtypes">
                    <input type='checkbox'></input>
                    subtypes
                    <input id='subtypes' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="rarity">
                    <input type='checkbox'></input>
                    rarity
                    <input id='rarity' onChange={handleManaCostChange} type="number" />
                </label>
                <label htmlFor="setName">
                    <input type='checkbox'></input>
                    setName
                    <input id='setName' onChange={handleManaCostChange} type="number" />
                </label>
               
                
            </div>
            <button onClick={ handleGetCards }>Get cards</button>
        </div>
    ) 
}

export default MtgFilter;
