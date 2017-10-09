import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../Common/Home' 
import Post from '../Common/Post' 
import Detail from '../Common/Detail' 
import User from '../Common/User' 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  state = {
    posts: [
      {
        id: '134',
        title: 'Git 使用技巧',
      },
      {
        id: '256',
        title: '命令使用技巧',
      },
      {
        id: '545',
        title: 'Github 基础',
      }
    ]
  }
  render () {
    const postList = this.state.posts.map((item, index) => (
      <li key={index}>
        <Link to={`/detail/${item.id}`}>
          {item.title}
        </Link>
      </li>
    ))
    return (
      // <div className='app'>
      //   <Header />
      //   <Main />
      //   <Footer />
      // </div>
      <Router>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/post/react'>React Good</Link>
          <ul>
            {postList}
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Header} />
          <Route path='/about' component={Footer} />
          <Route path='/me' component={User} />
          <Route path='/post/:title' component={Post} />
          <Route path='/detail/:id' component={Detail} />
        </div>
      </Router>
    )
  }
}
// <Route exact path='/' component={Home} />
// 使用exact进行路由的精确匹配，默认值为false
export default App
