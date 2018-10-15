import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    return (
      <div>
        <div>{this.props.symbol}</div>
        <div>{this.props.orderId}</div>
        <div>{this.props.price}</div>
        <div>{this.props.quantity}</div>
      </div>
    );
  }
}
