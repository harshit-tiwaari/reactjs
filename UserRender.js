import React from 'react'
import './App.css' //class component will not work untill we give it render
class UserRender extends React.Component{
  render() {
    console.log("Render Method",this.props)
    return (
      <div>
        <h1> User Component {this.props.name }</h1>
      </div>
    )
  }
}

export default UserRender
