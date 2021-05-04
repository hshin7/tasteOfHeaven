import './App.css';
import RightBox from './Components/RightBox'; 
import LeftBoxTop from './Components/LeftBoxTop';
import LeftBoxBottom from './Components/LeftBoxBottom';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()

    this.state ={
      orderArray: []
    }
  }

  updateOrderArray = () => {
    axios.get('/api/order').then((res) => {
      this.setState({orderArray: res.data})
  }).catch((err) => {
      console.log(err)
  })
  }

  componentDidMount(){
    this.updateOrderArray()
}



  render() {
    return (
      <div className="App">
        <div className = "left">
          <LeftBoxTop/>
          <LeftBoxBottom orderArray = {this.state.orderArray} updateOrderArray={this.updateOrderArray}/>
        </div>
  
        <div className = "right">
          <RightBox updateOrderArray = {this.updateOrderArray}/>
        </div>
        
      </div>
    )
  }
  
}

export default App;
