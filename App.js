import './App.css';
//import React from "react"   OR
import { useState } from 'react'; //usestate helps in update states.
//import User from './Users'
import User from './Users'

//function App() {
  //let data="Harshit"
  //function apple() {
    //data="peter "//here we are distinguishing data in function and apple.
    //alert(data)
  //}
///  return (
   // <div className="App">
      //<h1>{ data}</h1>
      //<button onClick={apple}> Click Me</button>
    //</div>
  //);  // in above <h1> tag,here in brackets we use variable objects.//
//}

function App() {
  const[data,updateData]=useState(0) //here first arg data is the date to be update and other updatedata is if we need to update data.//
 // let data = "Harshit"
  function setData() {
    updateData(data+1)
   // data = "Tiwari"
    //alert (data)
  }
  //console.log("__________")
  return (
    <div className='App'>
      <h1>{ data}</h1>
      <button onClick={setData}> Update Data</button>
    </div>
  )
}

export default App;
