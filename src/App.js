import React,{useState, useEffect} from 'react'
import Header from './Header';
import BeautyPage from './BeautyPage';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';


import {Route, Switch} from 'react-router-dom';

function App() {
  const [makeupArray, setMakeupArray] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/makeup')
    .then((r)=>r.json())
    .then((makeupData)=>{
        setMakeupArray(makeupData)
    })
}, [])

  return (
    <div className="app">
      <Header/>
      <NavBar/>
      <Switch>
        <Route path='/makeup/:id' component={ProductDetails}/>

        <Route exact path='/' component={
          () => <BeautyPage makeupArray={makeupArray}/>
        }/>
      </Switch>
        
    </div>
  );
}

export default App;