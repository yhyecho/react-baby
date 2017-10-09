import React, { Component } from 'react'

class Detail extends Component {
  state = {
    posts: [
        {
            id: '134',
            title: 'Git 使用技巧',
            content: '厉害了 我的git'
        },
        {
            id: '256',
            title: '命令使用技巧',
            content: '好棒的命令行'
        },
        {
            id: '545',
            title: 'Github 基础',
            content: '搬进github'
        }
    ]
  }
  render () {
     const { id } = this.props.match.params
     const { posts } = this.state
     const post = posts.find(item => item.id === id)
     // 取出id相等的显示  
     return (
       <div>
        <h1>
          {post.title}
        </h1>
        <p>
          {post.content}
        </p>
       </div>
     )
  }
}

export default Detail