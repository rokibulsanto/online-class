import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './Fakedata/Data';
import Course from './Components/Course/Course';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 const [cart,setcart] = useState([])

 const handleClick = (item) =>{
   console.log('course added',item);
   const newcart = [...cart,item]
   setcart(newcart)
 }
  return (
    <div className="App">
       <div className="course-container">
       <h1 style={{color:'cyan'}}> Online Course </h1>

         {
           Data.map(item => <Course item={item} handleClick={handleClick}> </Course>)
         }

       </div>
       <div className="enroll-container">
         <Cart cart={cart}></Cart>
      </div>
      
      
    </div>
  );
}

export default App;
