import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'

class Counter extends Component {

  increment() {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  decrement() {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }

  reset() {
    this.props.dispatch({
      type: 'RESET'
    })
  }

  render() {
    return (
      <div className = 'background'>
      <h1 className = 'title'>My Counter</h1>
      <div className = 'counter'>{this.props.counter}</div>
        <button className ='button' onClick ={this.increment.bind(this)}>+</button>
        <button className ='button' onClick ={this.decrement.bind(this)}>-</button>
        <button className ='resetButton' onClick ={this.reset.bind(this)}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
} 

export default connect(mapStateToProps)(Counter)