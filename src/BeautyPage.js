import React ,{useState} from 'react';
import FilterList from './FilterList';
import BeautyCard from './BeautyCard';




function BeautyPage({makeupArray}){
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory]= useState('All')


    const filteredMakeup = makeupArray
      .filter((makeup)=>{
            if(selectedCategory === 'All') {
                return true
            }else{
            return makeup.category === selectedCategory;
            }
        })
      .filter((makeup)=>{
        return makeup.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
      .map((makeup)=>{
          return <BeautyCard key={makeup.id} makeup={makeup}/>
      });
    
        
        return(
            <main>
                <FilterList setSelectedCategory={setSelectedCategory} setSearchTerm={setSearchTerm}/>
                <ul style={{listStyleType:'none'}} className='makeup cards'>{filteredMakeup}</ul>
            </main>
        )
        
    }
    
    
    export default BeautyPage;