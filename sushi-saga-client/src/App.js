import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [], 
    eaten: [],
    sliceInit: 0,
    sliceEnd: 4

  }

  handleClick = (sushiId) => {
    console.log(sushiId)
    this.setState({
      eaten: [...this.state.eaten, sushiId],
    })
  }

  fetchSushi = (init, end) => {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        // console.log(sushiData)
        this.setState({
          // For the slicey method
          // sushiArray: sushiData
          sushiArray: sushiData.slice(init, end)
        })
      })
  }
  

  componentDidMount() {
    this.fetchSushi(this.state.sliceInit, this.state.sliceEnd)
  }

  moreSushi = () => {
    this.setState({
      sliceInit: this.state.sliceInit + 4,
      sliceEnd: this.state.sliceEnd + 4
    },
      () => this.fetchSushi(this.state.sliceInit, this.state.sliceEnd)
      // Above is not needed for slicey method
    )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer handleClick={this.handleClick} 
          // Below for slicey method
          // sushiArray={this.state.sushiArray.slice(this.state.sliceInit, this.state.sliceEnd)}
                        sushiArray={this.state.sushiArray}
                        eaten={this.state.eaten}
                        moreSushi = {this.moreSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;