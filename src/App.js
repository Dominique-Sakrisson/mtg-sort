import React, {useState} from 'react'
import mtg from './mtg.png';
import './App.css';
import MtgFilter from './components/MtgFilter/MtgFilter';
import MtgCards from './components/MtgCards/MtgCards';
import { getCards } from './utils/mtgApi';

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
    
    const {cards} = await getCards(filter)
    setCards(cards)
    setLoading(false)
    window.scrollTo(0,document.body.scrollHeight);
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

    <MtgFilter 
      handleGetCards={handleGetCards} 
      setCards={setCards} 
      updateSearchFilter={updateSearchFilter} />
    {loading ? 'loading' : <MtgCards cards={cards} />}
    </div>
            </>
  );
}

export default App;
