import React,{useState} from 'react';
import {Link} from 'react-router-dom'


function BeautyCard({id, name, image, likes, price}){
    //console.log(id)
    const [updatedLikes, setUpdatedLikes] = useState({likes})
    //console.log(likes)
    const imageSize={
       width:'135px',
       height: '170px' 
    }

    function handleLikes(){
        setUpdatedLikes(updatedLikes + 1)
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