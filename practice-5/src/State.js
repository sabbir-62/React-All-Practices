import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count : this.state.count -1
        })
    }


  render() {
    let {count} = this.state;
    return (
      <div className="text-center">
        <h1>{count}</h1>
        <div>
            <Button  onClick={this.handleIncrement}>+</Button>
            <Button  onClick={this.handleDecrement} className = "m-2">-</Button>
        </div>
      </div>
    )
  }
}