  
import React from 'react';


function ProductReviews({id, comment, onAddReview}){
    return(
        <ul className='reviews'>
            <li className='reviews'>
                <p>{comment}</p>
            </li>
        </ul>
    )
  

}


export default ProductReviews;