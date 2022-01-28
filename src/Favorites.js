import React, {useState, useEffect} from 'react';

function Favorites({favoriteItems}){
    const [faves, setFaves] = useState([])
    //console.log(faves)

    const imageSize={
        width:'135px',
        height: '170px' 
     }

    useEffect(()=>{
        fetch('http://localhost:3000/makeup')
        .then((r)=>r.json())
        .then((data)=>setFaves(data))
    },[favoriteItems])

    

   

    
    
    
    return(
        <div className='favorite-items'>
            <div className='favorite-items-header'>
                <h1>My Favorites:</h1>
                </div>

            {faves.map((item)=>(
                <div key={item.id} className='favorites-item-list'>
                    <img style={imageSize} className='favorites-item-image' src={item.image} alt={item.name}/>
                    <p>{item.name}</p>
                    <button>Delete</button>
                </div>
            ))}
        </div>


    
    )
}

export default Favorites;