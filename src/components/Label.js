import React, { Component } from 'react';

class Label extends Component {
  render() {
    return <h1>Label: {this.props.name}</h1>;
  }
}

export default Label;