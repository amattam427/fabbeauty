import React from 'react';
import {Link} from 'react-router-dom'


function BeautyCard({makeup, onUpdateMakeup}){
    const {id, image, name, likes, price} = makeup

    //console.log(id)
    

   
    //console.log(likes)
    const imageSize={
       width:'135px',
       height: '170px' 
    }

    function handleLikes(){
        const updateLikesObj = {
            likes:makeup.likes + 1,
        };

        fetch(` http://localhost:3000/makeup/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateLikesObj),
        })
            .then((r)=> r.json())
            .then(onUpdateMakeup)

        
    }

  

    return(
        <li className='card'>
            <Link to={`makeup/${id}`}>
                <img style={imageSize} src={image} alt={name}/>
            </Link>
            <h4>{name}</h4>
            <p style={{textAlign:'left'}}>Price:{price}</p>
            <button onClick ={handleLikes}>❤️{likes}</button>
        </li>
    )

}


export default BeautyCard;