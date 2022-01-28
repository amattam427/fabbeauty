import React from 'react';

function FilterList({setSelectedCategory}){
    function handleFilterChange(e){
        setSelectedCategory(e.target.value)
    }

    return(
        <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Face">Face</option>
          <option value="Eye">Eye</option>
          <option value="Lip">Lip</option>
          <option value="Cheek">Cheek</option>
        </select>
      </div>
    )

}

export default FilterList;
