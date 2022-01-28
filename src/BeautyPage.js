import React ,{useState} from 'react';
import Search from './Search';
import FilterList from './FilterList';
import BeautyList from './BeautyList';



function BeautyPage({makeupArray}){
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory]= useState('All')

    const filteredMakeup = makeupArray
        .filter((makeup)=>
            makeup.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
        .filter((makeup)=>{
            if(selectedCategory === 'All') {
                return true
            }else{
            return makeup.category === selectedCategory;
            }
        })
        
        return(
            <main>
                <Search setSearchTerm={setSearchTerm}/>
                <FilterList setSelectedCategory={setSelectedCategory}/>
                <BeautyList makeupList={filteredMakeup}/>
            </main>
        )
        
    }
    
    
    export default BeautyPage;