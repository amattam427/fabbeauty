import React, {useEffect, useState} from 'react';

import {useParams, useHistory, Link} from 'react-router-dom';
import NewReviewForm from './NewReviewForm';

import ProductReviews from './ProductReviews';


function ProductDetails({addReview}){
    const [product, setProduct] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    const imageSize={
        width:'300px',
        height: '350px' 
     }

   const history = useHistory();
   const {id}= useParams();
   //useParams is used to access a key value pair --> in this case we want it to match with the id key we have in our data
   useEffect(()=>{
       fetch (`http://localhost:3000/makeup/${id}`)
        .then((r)=>r.json())
        .then((product)=>{
            setProduct(product);
            setIsLoaded(true);
        });
   }, [id])

   if (!isLoaded) return <h2>Loading...</h2>;

   const {image, name, price, description, reviews} = product
    //console.log(product)

  



   return(
       <div className='product-detail container'>
           <div className='product-image'>
            <img style= {imageSize} src={image} alt={name}/>
           </div>
           <button>Add to Favorites</button>
           <div className='product details'>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <h3>Reviews:</h3>
            <ul className='reviews'>
                {reviews.map((review)=>
                    <ProductReviews key={review.id} id={review.id} comment={review.comment} />
                )}
            </ul>
            <NewReviewForm/>
           </div>
           <div className='reviews container'>
           </div>
           <Link 
            to = '' onClick={()=>history.goBack()}>Back to main</Link>

       </div>
   )

   
    
}



export default ProductDetails;