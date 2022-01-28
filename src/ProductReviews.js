import React from 'react';

function ProductReviews({id, comment}){
    return(
        <li className='reviews'>
            <p>{comment}</p>
        </li>
    )
  

}


export default ProductReviews;