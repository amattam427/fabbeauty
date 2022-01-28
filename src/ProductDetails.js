import React, {useEffect, useState} from 'react';

import {useParams, useHistory, Link} from 'react-router-dom';
//import Favorites from './Favorites';
//import NewReviewForm from './NewReviewForm';

import ProductReviews from './ProductReviews';


function ProductDetails({onAddFave}){
const history = useHistory();
const {id}= useParams();
    const [product, setProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [faveData, setFaveData] = useState({
    //     product:{name:'name', image:'image'}
    // });


    const imageSize={
        width:'300px',
        height: '350px' 
     }

//    const history = useHistory();
//    const {id}= useParams();
   //useParams is used to access a key value pair --> in this case we want it to match with the id key we have in our data
   useEffect(()=>{
       fetch (`http://localhost:3000/makeup/${id}`)
        .then((r)=>r.json())
        .then((data)=>{
            //console.log(data)
            setProduct(data);
            setIsLoaded(true);
        });
   }, [id])

   if (!isLoaded) return <h2>Loading...</h2>;

   const {image, name, price, description, reviews} = product
    //console.log(product)
    function handleSubmitFaves(e){
        e.preventDefault();
        const name=product.name;
        const image=product.image;
        

        const faveData={
           'name':name,
           'image':image,
        };
        

        fetch(`http://localhost:3000/makeup`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(faveData)
        })
        .then (r=>r.json())
        .then(data =>{
            history.push(`/favorites`)
        })
    }

    // function handleChange(e){
    //     setFaveData({
    //         ...faveData,
    //         [e.target.name]:e.target.value
    //     })
    // }

  



   return(
       <div className='product-detail container'>
           <div className='product-image'>
            <img style= {imageSize} name='image' src={image} alt={name}/>
           </div>

            <button className='faves-button' onClick={handleSubmitFaves}>Add to Favorites</button>
            
        
           <div className='product details'>
            <h2 name='name'>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <h3>Reviews:</h3>
                {reviews.map((review)=>
                    <ProductReviews key={review.id} id={review.id} comment={review.comment} />
                )}
           
           </div>
           <div className='reviews container'>
           </div>
           <Link 
            to = '' onClick={()=>history.goBack()}>Back to main</Link>

       </div>
   )

   
    
}



export default ProductDetails;