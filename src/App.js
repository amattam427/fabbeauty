import React,{useState, useEffect} from 'react'
import Header from './Header';
import BeautyPage from './BeautyPage';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';
import ProductReviews from './ProductReviews'
import AddNewProduct from './AddNewProduct';


import {Route, Switch} from 'react-router-dom';

function App() {
  const [makeupArray, setMakeupArray] = useState([]);
 
  
  useEffect(()=>{
    fetch('http://localhost:3000/makeup')
    .then((r)=>r.json())
     .then(setMakeupArray)
    }, [])


    function handleAddReview(newReview) {
      const newReviewArray = [newReview, ...makeupArray];
      setMakeupArray(newReviewArray);
    }

    function handleUpdateMakeup(updatedMakeup){
      const updateMakeup = makeupArray.map((makeup)=>
      makeup.id === updatedMakeup.id ? updatedMakeup : makeup
      );
      setMakeupArray(updateMakeup);
    }

    // function handleAddProduct(addToFave){
    //   const updatedFavoritesArray = [...makeupArray, addToFave];
    //   setMakeupArray(updatedFavoritesArray)
    // }


    // function handleAddProduct(addToFave){
    //   const favoritesArray= favoriteItems.find((item)=>item.id === addToFave.id);
    //   setFavoriteItems([...favoriteItems, favoritesArray]);
    // };

    function handleAddProduct(addToForm){
      const updatedProductsArray = [addToForm,...makeupArray]
      setMakeupArray(updatedProductsArray)
    }

    // function handleDeleteFaves(deleteFave){
    //   const deleteFavoritesArray = makeupArray.filter((faves)=>faves.id !== deleteFave.id);
    //   setMakeupArray(deleteFavoritesArray)
    // }

  return (
    <div className="container">
      <Header/>

      <NavBar/>
      
      <Switch>
      <Route path='/reviews' component={
          ()=><ProductReviews onAddReview={handleAddReview}/>
        }/>

      <Route path='/newform' component={
          ()=><AddNewProduct handleAddProduct={handleAddProduct}  />
        }/>

        <Route path='/makeup/:id' component={
          ()=> <ProductDetails  handleAddProduct={handleAddProduct}/>
        }/>

        <Route exact path='/' component={
           ()=> <BeautyPage makeupArray={makeupArray} onUpdateMakeup={handleUpdateMakeup}/>
        }/>
      </Switch>
        
    </div>
  );
}

export default App;