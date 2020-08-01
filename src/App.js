import React,{ Component} from 'react';
import './App.css';
import Header from './components/ui/header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/characterGrid'
import {setSearchField} from './components/actions'
import{connect} from 'react-redux';

const mapStateToProps= state =>{
  return{
    query: state.query
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
  }
class App extends Component{
  constructor() {
    super()
    this.state = {
      items: [],
      isLoading:true,
      
    }
  }

  componentDidMount(){
      fetch(`https://www.breakingbadapi.com/api/characters?name=${this.props.query}`)
      .then(response=> response.json())
      .then(items => {this.setState({ items: items, isLoading:false})});
  }

  render(){
    const{items,isLoading}= this.state;
    const{query,onSearchChange}= this.props

    const filtered = items.filter(robot =>{
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })

    return(
      <div className="container">
    <Header/>
    <Search searchChange={onSearchChange }/>
    <CharacterGrid isLoading={isLoading} items={filtered} />
  </div>
    );
    
   }
}
 


export default connect(mapStateToProps,mapDispatchToProps)(App);
