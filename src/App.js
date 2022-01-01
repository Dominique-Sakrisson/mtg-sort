import React, {useState} from 'react'
import mtg from './mtg.png';
import './App.css';
// import {GraphQLClient, ClientContext} from 'graphql-hooks'
import MtgFilter from './components/MtgFilter/MtgFilter';
import MtgCards from './components/MtgCards/MtgCards';
import { getCards } from './utils/mtgApi';
import FeatureBanner from './components/FeatureBanner/FeatureBanner';
import MtgSetsList from './components/MtgSets/MtgSetsList';
// const mtgClient = new GraphQLClient({
//   url: 'https://api.magicthegathering.io/v1/cards'
// })

function App() {
  const [featuredCard, setFeaturedCard] = useState();
  const [filter, setFilter] = useState({});
  const [cards, setCards] = useState()

  const [searchFilter, setSearchFilter] = useState({power: ''})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);

  function updateFeaturedBanner(card){
    setFeaturedCard(card)
  }

  function updateSearchFilter(filterObj){ 
    setFilter(filterObj)
  }
  async function handleGetCards() {
    setLoading(true)
    console.log(loading);
    const {cards} = await getCards(filter)
    setData(cards)
    setLoading(false)
}
  return (<>
    {/* // <ClientContext.Provider value={mtgClient}>  */}
    <div className="App">
      <header className="App-header">
        <img src={mtg} className="App-logo" alt="logo" />
        <p>
          Search the whole Library
        </p>
        <a
          className="App-link"
          href="https://docs.magicthegathering.io/"
          target="_blank"
          rel="noopener noreferrer"
          >
          MTG API
        </a>
        
      </header>
    {/* <MtgSetsList /> */}
    {/* <FeatureBanner card={featuredCard} /> */}
    <MtgFilter handleGetCards={handleGetCards} setCards={setCards} updateSearchFilter={updateSearchFilter} />
    {loading ? 'loading' : <MtgCards cards={data}  />}
    
    {/* // </ClientContext.Provider> */}
    </div>
            </>
  );
}

export default App;
