import React, {useState, useEffect} from 'react';

function Favorites({onDeleteFave}){
    const [faves, setFaves] = useState({
        name:'name',
        image:'image'
    })
    //const {image, name} = faves
    

    useEffect(()=>{
        fetch ('http://localhost:3000/makeup')
        .then((r)=>r.json())
        .then((data)=>{
            setFaves(data)
        }, [])
    })

    
    
    
    return(
        <div>
        <h2>Faves List</h2>
        <ul>
        </ul>
       

        </div>
    )
}

export default Favorites;