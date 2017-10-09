### 一. React初体验
#### 0. 使用淘宝镜像
```js
npm config set registry https://registry.npm.taobao.org
```
#### 1. 安装create-react-app
```js
npm install -g create-react-app
```
#### 2. 用create-react-app 创建react项目
```js
create-react-app react-baby
```
#### 3. 进入react-baby文件夹，启动项目
```js
cd react-baby
npm start
```

### 二. 组件是什么？
### 三. 组件如何拆分？
### 四. 如何使用组件的属性(props) 
```js
父组件:
class Main extends Component {
  render () {
     let name = 'yuhuayang'
     return (
       <div className='main'>
         {name}
         <Button text= '登录' />
         <br />
         <Button text= '注册' />
       </div>
     )
  }
}
```
```js
子组件:
class Button extends Component {
  render () {
     return (
       <div className='button' >
         {this.props.text}
       </div>
     )
  }
}
```

### 五. 组件属性中的children(this.props.children)
```js
可以传入文本
<Button>登录</Button>

也可以传入组件
<Layout>
  <Main />
</Layout>
```
### 六. React中的事件如何响应？
```js
class Main extends Component {
  handleClick = () => {
    console.log('clicked')
  }
  render () {
     let name = 'yuhuayang'
     return (
        <div onClick={this.handleClick} className="click">
          <button>click me</button>
        </div>
     )
  }
}
```

### 七. 什么是State？
> 一个 React 组件能够接受的数据有两类。一类就是我们介绍过的 props （属性值），另一类就是 state （状态值）。Props 是组件跟外部世界沟通的桥梁，而组件内部的数据，则会存放到 state 中。
```js
class Main extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      // state是只读的，这里修改的是state的拷贝
      count: this.state.count + 1 
    })
  }
  render () {
     let name = 'yuhuayang'
     return (
        <div className="count" onClick={this.handleClick}>
          {this.state.count}
          <button>count + 1</button>
        </div>
     )
  }
}
```
```js
运用state改变div颜色
class Main extends Component {
  state = {
    active: false
  }
  changeColor = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
     let name = 'yuhuayang'
     return (
         <div className={`stateDiv ${this.state.active && 'active'}`} // 模版字符串
         onClick={this.changeColor} >
         </div>
     )
  }
}
```
### 七. 列表和key
```js
import React, { Component } from 'react'
import './catList.css'

class CatList extends Component {

  state = {
      sizes: [
          {
              size: 'M'
          },
          {
              size: 'L'
          },
          {
              size: 'XL'
          },
          {
              size: 'XXL'
          }
      ]
  }
  render () {
    // const sizeList = [
    //     <div key= '1' className='size'>M</div>,
    //     <div key= '2' className='size'>L</div>,
    //     <div key= '3' className='size'>XL</div>,
    //     <div key= '4' className='size'>XXL</div>
    // ]
    const sizeList = this.state.sizes.map((item, i) => (
        <div key={i} className='size'>{item.size}</div>
    ))
    // 等价于
    // this.state.sizes.map((item, i) =>{
    // return (<div key={i}
    //             className="size">
    //             {item.size}
    //         </div>)  
    // })
    return (
    <div className='catList'>
        {sizeList}
    </div>
    )
  }
}

export default CatList
```
### 八. 受控组件和表单
> 通过对 input 的 value 和 onChange 事件的使用，让 input 显示的内容被 state 值控制，也就是形成所谓的受控组件。
```js
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
```
### 九. React Router前端路由
```js
npm i react-router-dom
```
```js
import React, { Component } from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
```
> 用了 React Router 之后，就不要再用 a 标签了（除非要链接到外站）
```js
class App extends Component {
  render () {
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
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Header} />
          <Route path='/about' component={Footer} />
        </div>
      </Router>
    )
  }
}
```
> 何时使用哈希路由
```js
import {
  HashRouter as Router
} from 'react-router-dom'
运行之后，区别在于，url 中多个哈希符（#）
```
> 路由传参
```js
<Router>
  <div>
    <Link to='/post/react'>React Good</Link>
    <Route path='/post/:title' component={Post} />
  </div>
</Router>
```
```js
import React, { Component } from 'react'

class Post extends Component {
  render () {
     const { title } = this.props.match.params
     return (
       <div>
         {title}
       </div>
     )
  }
}

export default Post
```
> Switch的作用
```js
有了 exact 有些情况还是应付不来
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```
```js
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
一旦上面的 Route 匹配成功，那么之后的 Route 就直接忽略。
```
### 十. 操作API
> axios请求API
```js
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
```
> json-server搭建API
* 全局安装json-server
```js
npm i -g json-server
```
* 创建 db.json 文件
```json
{
  "posts": [
    {
      "id": "134",
      "title": "Git 使用技巧",
      "content": "main content"
    },
    {
      "id": "256",
      "title": "命令使用技巧",
      "content": "main content"
    },
    {
      "id": "545",
      "title": "Github 基础",
      "content": "main content"
    }
  ]
}
```
* 启动服务
```js
json-server --watch db.json -p 3008
```

