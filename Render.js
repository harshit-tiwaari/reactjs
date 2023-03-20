//when will redner method will run :1->when state and props updates
import './App.css'
import UserRender from './UserRender'
import React from 'react'

function Render() {
      const[name,setName]=React.useState("Harshit")
  return (

    <div className="Render">
      <h1>Render Method iN React</h1>
      <UserRender name={name} />
      <button onClick={()=>setName("Tiwari")}>Update Name</button>
    </div>
  )

} 
export default Render