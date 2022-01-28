import React from 'react';

function FilterList({setSelectedCategory, setSearchTerm}){
    function handleFilterChange(e){
        setSelectedCategory(e.target.value)
    }

    function handleSearch(e){
        
      setSearchTerm(e.target.value)
  }

    return(
        <>
        <input
          style={{width:'200px'}}
          type='text'
          id='search'
          placeholder='Search for brand or name...'
          onChange={handleSearch}/>

        <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Face">Face</option>
          <option value="Eye">Eye</option>
          <option value="Lip">Lip</option>
          <option value="Cheek">Cheek</option>
        </select>
      </div>
      </>
      
    )

}

export default FilterList;
