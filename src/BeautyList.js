import React from 'react';
import BeautyCard from './BeautyCard';

function BeautyList({makeupList}){

    return(
        <ul style={{listStyleType:'none'}} className='cards'>
            {makeupList.map((makeup)=>
                <BeautyCard
                    key={makeup.id}
                    id={makeup.id}
                    name={makeup.name}
                    image={makeup.image}
                    likes={makeup.likes}
                    price={makeup.price}
                    
                />
            )}
        </ul>
    );
}



export default BeautyList;