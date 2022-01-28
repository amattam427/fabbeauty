import React, {useEffect, useState} from 'react';

import {useParams, useHistory, Link} from 'react-router-dom';
//import Favorites from './Favorites';
//import NewReviewForm from './NewReviewForm';

import ProductReviews from './ProductReviews';


function ProductDetails({handleAddProduct}){
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
    function handleClick(){
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
        .then((addToFave)=>handleAddProduct(addToFave))
        // .then(data =>{
        //     history.push(`/favorites`)
        
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
            <img key={product.id} style= {imageSize} name='image' src={product.image} alt={product.name}/>
           </div>

            <button className='add-to-favorites' onClick={()=>history.push(handleClick)}>Add to Favorites</button>
            {/* onClick={()=>handleAddProduct(product)} */}
            
        
           <div className='product details'>
            <h2 name='name'>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <h3>Reviews:</h3>
                {product.reviews.map((review)=>
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