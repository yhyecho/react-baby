import React, { Component } from 'react'
import AddIcon from './add.svg'
import axios from 'axios'
import './add-dog.css'

class AddDog extends Component {
  state = {
      showForm: false,
      imgUrl: ''
  }

  handleChange = (e) => {
      this.setState({
        imgUrl: e.target.value
      })
  }

  handleSubmit = () => {
      const { imgUrl } = this.state
      const data = {
          imgUrl
      }
      axios.post('http://localhost:3008/dogs', data).then(
          res => {
              this.toggleForm()
              this.props.addDog(res.data)
          }
      )
  }

  toggleForm = () => {
      this.setState({
          showForm: !this.state.showForm,
          imgUrl: ''
      })
  }
  render () {
     const form = (
         <div className="add-form-wrap">
             <div className="add-form">
                 <div className="form-row">
                     <input type="text" placeholder="imgUrl"
                        value={this.state.imgUrl}
                        onChange={this.handleChange}
                     />
                 </div>
                 <div className="form-row">
                     <button className="primary" onClick={this.handleSubmit}>确定</button>
                     <button onClick={this.toggleForm}>取消</button>
                 </div>
             </div>
         </div>
     )
     const { showForm } = this.state
     return (
       <div className='AddDog'>
         {showForm && form}
         <img onClick={this.toggleForm} 
         className='add-btn' 
         src={AddIcon} alt="add" />
       </div>
     )
  }
}

export default AddDog