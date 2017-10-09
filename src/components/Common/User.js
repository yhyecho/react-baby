import React, { Component } from 'react'
import axios from 'axios'
import './user.css'

class User extends Component {
  state = {
      username: '',
      avatar: ''
  }
  componentDidMount = () => {
      axios.get('https://api.github.com/users/yhyecho')
        .then(res => {
            console.log(res.data)
            this.setState({
                username: res.data.login,
                avatar: res.data.avatar_url
            })
        })
  }
  render () {
     return (
       <div className='user'>
         <img src={this.state.avatar} alt="头像"/>
         <h1>
             {this.state.username}
         </h1>
       </div>
     )
  }
}

export default User