import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  render () {
     return (
       <div className='button' >
         {this.props.text}
       </div>
     )
  }
}

export default Button