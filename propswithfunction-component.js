import './App.css';
import React,{useState} from 'react'
//import React,{Component} from "react"   //OR
//import { useState } from 'react'; //usestate helps in update states.
//import User from './Users'
import User from './Users'
//import './App.css'
import Student from './student'
function App() {
  const [name, setName] = useState("Harshit")
  return ( //curly brackets not matter beloiw in the case of 
    <div className="App">
      <h1> Props in React</h1>
      <Student name={name} />
      <button onClick={() => { setName("siddharth") }} > Update Name</button>
     
      
    </div>
  )
}

function App() {
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
//STATE WITH FUNCTION COMPONENT//
//function App() {
  //const[data,updateData]=useState(0) //here first arg data is the date to be update and other updatedata is if we need to update data.//
 // let data = "Harshit"
  //function setData() {
    //updateData(data+1)
   // data = "Tiwari"
    //alert (data)
  // }
  //STATE WITH CLASS COMPONENT
//class App extends Component {
  //constructor() {
    //super(); //to access this u should uise this.
    //this.state={ //this-?
      //data:'Harshit'
    //}
  //}
  //apple() {
  //this.setState({data:"tIWARI"})
  //}
  
  //render() {
    //return (
      //<div className='App'>
        //<h1>{this.state.data}</h1>
        //<button onClick={() =>this.apple()}> </button>
        
      //</div>
    //)
  //}
//}
  
 


export default App;
