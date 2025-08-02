import React from 'react';
const Search = ({searchState,setSearchState}) => {
return(
    <div className='search'>
        <div>
            <img src='search.svg' alt='searchIcon'/>
            <input
            type='text'
            placeholder='Search your need'
            value={searchState}
            onChange={(event) => setSearchState(event.target.value)}
            />
        </div>
    </div>
)
}

export default Search;