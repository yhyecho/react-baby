import React, { Component } from 'react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleClick = () => {
      console.log(this.state)
  }
  handleChange = (e) => {
    const name = e.target.name
    this.setState({
        [name]: e.target.value // [name] 去匹配
    })
  }
  render () {
     return (
       <div>
         用户名: <input type="text" name="username" 
         value={this.state.username}
         onChange={this.handleChange} />
         密码: <input type="password" name="password" 
         value={this.state.password}
         onChange={this.handleChange} />
         <button onClick={this.handleClick}>登录</button>
       </div>
     )
  }
}

export default Login