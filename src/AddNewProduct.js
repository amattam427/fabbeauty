import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function AddNewProduct({handleAddProduct}){
   const [formData, setFormData] = useState({
       name:'',
       image:'',
       likes:'',
       category: '',
       price:'',
       description:'',
       comment:'',

   })

    //console.log(faves)

    const imageSize={
        width:'135px',
        height: '170px' 
     }

     function handleSubmit(e){
         e.preventDefault();

         fetch('http://localhost:3000/makeup',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData)
            })
            .then((r)=>r.json())
         .then((addToForm)=>handleAddProduct(addToForm));
        }
        function handleChange(e){
            setFormData({
              ...formData,
              [e.target.name] : e.target.value
            })
          }
    
    
    
    return(
        <div className='add-product'>
            <h1>Add More!</h1>
            <form onSubmit={handleSubmit}>
                <input
                label="name" type='text' id='name' placeholder='Name and brand of product' name='name' value={formData.name}
                onChange={handleChange}/>

                <input label="image" type='text' id='image' placeholder='insert image url' name='image' value={formData.image}
                onChange={handleChange}/>
                
                <input label="price" type='text' id='price' placeholder='Insert retail price' name='price' value={formData.price}
                onChange={handleChange}/>
                
                <input
                label="description" type='text' id='description' placeholder='Write a brief description about the product (i.e what skin types are more suitable)'
                name='description' value={formData.description} onChange={handleChange}/>
                
                <input
                label="review" type='text' id='review' placeholder='Write a review!' name='review' value={formData.comment}
                onChange={handleChange}/>
                
                <div className="Filter">
                <select name="filter" onChange={handleChange}>
                <option value="All">Filter by category</option>
                <option value="Face">Face</option>
                <option value="Eye">Eye</option>
                <option value="Lip">Lip</option>
                <option value="Cheek">Cheek</option>
                 </select>
                <Link to='/'>
                 <button type='submit'>Submit</button>
                 </Link>
                </div>

            </form>
        </div>


    
    )
}

export default AddNewProduct;