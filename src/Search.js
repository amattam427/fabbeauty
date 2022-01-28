import React from 'react';


function Search({setSearchTerm}){
    function handleSearch(e){
        setSearchTerm(e.target.value)
    }

    return(
        <div className='searchbar'>
            <label htmlFor='search'>Search Makeup:</label>
            <input 
                style={{width:'200px'}}
                type='text'
                id='search'
                placeholder='Search for brand or name...'
                onChange={handleSearch}/>
        </div>
    )

}

export default Search;