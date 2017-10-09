import React, { Component } from 'react'
import DogIcon from '../DogIcon/DogIcon'
import axios from 'axios'
import AddDog from '../AddDog/AddDog'
import './Home.css'

class Home extends Component {
  state = {
    dogs: []
  }

  addDog = (dog) => {
    this.setState({
      dogs: [
        ...this.state.dogs,
        dog
      ]
    })
  }

  updateDogs = (id) => {
    this.setState({
      dogs: this.state.dogs.filter(item => item.id !== id)
    })
  }

  componentDidMount () {
    axios.get('http://localhost:3008/dogs').then(res => {
      this.setState({
        dogs: res.data
      })
    })
  }
  render () {
     const dogList = this.state.dogs.map((item) => {
       return (
        <div key={item.id} className='dog-icon-wrap'>
         <DogIcon dog={item} updateDogs={this.updateDogs} />
        </div>
       )
     })
     return (
       <div className='home'>
         <div className="dog-list">
           {dogList}
           <AddDog addDog={this.addDog} />
         </div>
       </div>
     )
  }
}

export default Home