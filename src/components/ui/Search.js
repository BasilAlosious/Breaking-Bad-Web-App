import React from 'react'

const Search = ({searchChange}) => {

    return (
     <section className='search'>
            <input 
            type='text'
            className='form-control'
            placeholder='search characters'
            onChange={searchChange}
            />
     </section>
    )
}

export default Search
