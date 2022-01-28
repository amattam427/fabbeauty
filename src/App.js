import React,{useState, useEffect} from 'react'
import Header from './Header';
import BeautyPage from './BeautyPage';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';
import Favorites from './Favorites';


import {Route, Switch} from 'react-router-dom';

function App() {
  const [makeupArray, setMakeupArray] = useState([]);
  //const [favoritesArray, setFavoritesArray] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/makeup')
    .then((r)=>r.json())
    .then((makeupData)=>{
        setMakeupArray(makeupData)
    })
}, [])

    // function handleAddReview(newReview) {
    //   const newReviewArray = [newReview, ...makeupArray];
    //   setMakeupArray(newReviewArray);
    // }

    function handleAddToFaves(addToFave){
      const updatedFavoritesArray = [...makeupArray, addToFave];
      setMakeupArray(updatedFavoritesArray)
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
      <Route path='/favorites' component={
          ()=><Favorites onDeleteFave={handleDeleteFaves}/>
        }/>

        <Route path='/makeup/:id' component={
          ()=> <ProductDetails onAddFave={handleAddToFaves} />
        }/>

        <Route exact path='/' component={
          () => <BeautyPage makeupArray={makeupArray}/>
        }/>
      </Switch>
        
    </div>
  );
}

export default App;