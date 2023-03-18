import './App.css'
import {useState} from 'react'

function Handleform() {
  const [name,setName] = useState("")
  const [tnc, setTnc] = useState(false)
  const[interest,setInterest]=useState("")
  function getFormData(e) {
    console.log(name,tnc,interest)
    e.preventDefault()
  }
  return (
    <div className="Handleform">
      <h1> Handle form in react </h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={ (e)=>setName(e.target.value)} /> <br /><br /> 
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Marvel</option>
          <option>DC</option>
          <option>Apple</option>
        </select> <br /> <br />
        <input type="checkbox" onChange={ (e)=>setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span>
        <br></br>
        <button type="submit">Submit </button>
</form>
    </div>
  )
}
export default Handleform