import React,{useState} from 'react';
import {useParams} from 'react-router-dom';

function NewReviewForm({onAddReview}){
    const [review, setReview] = useState("");

    const {id}=useParams();
    function handleSubmit(e){
        e.preventDefault();
        const formData ={review}

        fetch(`http://localhost:3000/makeup/${id}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then ((newReview)=>{
                onAddReview(newReview)
            });

        }
        function handleChange(e){
            setReview({
                ...review,
                [e.target.name] : e.target.value
            })
        }


    return(
        <div className='new-review-form'>
            <h3>Add a review</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' id="reviews" name="reviews" value={review} onChange={handleChange} placeholder='Add a review!'/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
    

}



export default NewReviewForm;