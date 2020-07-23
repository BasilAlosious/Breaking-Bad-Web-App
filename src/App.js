import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/ui/header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/characterGrid'
import Axios from 'axios';
const App=() => {
  const [items, setItems]= useState([])
  const[isLoading, setIsLoading]= useState(true)
  const[query, setQuery]= useState('')
  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
