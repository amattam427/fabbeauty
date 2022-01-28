import React,{useState, useEffect} from 'react'
import Header from './Header';
import BeautyPage from './BeautyPage';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';
import ProductReviews from './ProductReviews'
import Favorites from './Favorites';


import {Route, Switch} from 'react-router-dom';

function App() {
  const [makeupArray, setMakeupArray] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/makeup')
    .then((r)=>r.json())
     .then(setMakeupArray)
    }, [])


    function handleAddReview(newReview) {
      const newReviewArray = [newReview, ...makeupArray];
      setMakeupArray(newReviewArray);
    }

    // function handleAddProduct(addToFave){
    //   const updatedFavoritesArray = [...makeupArray, addToFave];
    //   setMakeupArray(updatedFavoritesArray)
    // }

    // const handleAddProduct = (product)=>{
    //   const ProductExist = favoriteItems.find((item)=>item.id === product.id);
    //   if (ProductExist){
    //     setFavoriteItems(favoriteItems.map((item)=>item.id === product.id ?
    //     {...ProductExist, quantity:ProductExist.quantity+1}: item)
    //     );
    //   } else{
    //     setFavoriteItems([...favoriteItems,{...product, quantity:1}])
    //   }
    // }

    // function handleAddProduct(addToFave){
    //   const favoritesArray= favoriteItems.find((item)=>item.id === addToFave.id);
    //   setFavoriteItems([...favoriteItems, favoritesArray]);
    // };

    function handleAddProduct(addToFave){
      const favoritesArray = [addToFave,...favoriteItems]
      setFavoriteItems(favoritesArray)
    }

    function handleDeleteFaves(deleteFave){
      const deleteFavoritesArray = makeupArray.filter((faves)=>faves.id !== deleteFave.id);
      setMakeupArray(deleteFavoritesArray)
    }

  return (
    <div className="app">
      <Header/>

      <NavBar/>
      
      <Switch>
      <Route path='/reviews' component={
          ()=><ProductReviews onAddReview={handleAddReview}/>
        }/>

      <Route path='/favorites' component={
          ()=><Favorites handleAddProduct={handleAddProduct} onDelete={handleDeleteFaves} setFavoriteItems={setFavoriteItems} favoriteItems={favoriteItems}/>
        }/>

        <Route path='/makeup/:id' component={
          ()=> <ProductDetails  handleAddProduct={handleAddProduct}/>
        }/>

        <Route exact path='/' component={
           ()=> <BeautyPage makeupArray={makeupArray}/>
        }/>
      </Switch>
        
    </div>
  );
}

export default App;