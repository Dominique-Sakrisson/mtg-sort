import React, {useState} from 'react'
import './MtgSetItem.css'

const MtgSetItem = ({mtgSet}) => {
    
    return(
        <li>
        <div className='setBanner'>
            <p>Name : {(mtgSet.name) ? mtgSet.name : 'Name unavailable'}</p>
            <p>Date : {(mtgSet.releaseDate) ? mtgSet.releaseDate: 'Release Date unavailable' }</p>
        </div>
        <div>
           <h2> type: {(mtgSet.type) ? mtgSet.type : 'Type unavailable'} </h2>
        </div>
    </li>
)}

export default MtgSetItem;
