import React, { Component } from 'react'
import './main.css'
import Button from '../Common/Button'
import CatList from '../Common/CatList'
import Login from '../Common/Login'

class Main extends Component {
  state = {
    count: 0,
    active: false
  }
  handleClick = () => {
    console.log('clicked')
    this.setState({
      count: this.state.count + 1 // state是只读的，这里修改的是state的拷贝
    })
  }
  changeColor = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
     let name = 'yuhuayang'
     return (
       <div className='main'>
         {name}
         <Button text= '登录' />
         <br />
         <Button text= '注册' />
         <div onClick={this.handleClick} className="click">
           <button>click me</button>
         </div>
         <div className="count" onClick={this.handleClick}>
           {this.state.count}
           <button>count + 1</button>
         </div>
         <div className={`stateDiv ${this.state.active && 'active'}`} onClick={this.changeColor} >

         </div>
         <CatList />
         <Login />
       </div>
     )
  }
}

export default Main