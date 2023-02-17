import React, { Component } from 'react'
import './Die.css'

export class die extends Component {
  render() {
    return (
        <i 
        className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`}></i>
    )
  }
}

export default die