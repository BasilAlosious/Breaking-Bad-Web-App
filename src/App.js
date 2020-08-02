import React,{ Component} from 'react';
import './App.css';
import Header from './components/ui/header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/characterGrid'
import {setSearchField,requestItems} from './components/actions'
import{connect} from 'react-redux';

const mapStateToProps= state =>{
  return{
    query: state.SearchItems.query,
    isPending: state.requestItems.isPending,
    items:state.requestItems.items,
    error:state.requestItems.error
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestItems:() => dispatch(requestItems())
  }
  }
class App extends Component{
 
  
  componentDidMount(){
    this.props.onRequestItems()
  }

  render(){
    const{query,onSearchChange,items,isPending}= this.props
    const filtered = items.filter(character =>{
      return character.name.toLowerCase().includes(query.toLowerCase());
    })

    return(
      <div className="container">
    <Header/>
    <Search searchChange={onSearchChange }/>
    <CharacterGrid isLoading={isPending} items={filtered} />
  </div>
    );
    
   }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(App);
