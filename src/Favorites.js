import React, {useState, useEffect} from 'react';

function Favorites({makeupArray}){
    const [faves, setFaves] = useState([])
    //console.log(faves)
    

    useEffect(()=>{
        fetch (`http://localhost:3000/makeup`)
        .then(r=>r.json())
        .then(data=> setFaves(data))
    }, [makeupArray])

   

    
    
    
    return(
        <div>
        <h2>Faves List</h2>
        <ul>
            {faves.map((fave)=>{
                <li key={fave.id}>
                    Product: {fave.image} Brand:{fave.name}
                </li>
            })}
        
        </ul>


        </div>
    )
}

export default Favorites;