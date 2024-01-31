import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            isInStock: true,
        };
    }
    toggleStock =() =>{
        this.setState((prevState) => ({
            isInStock: !prevState.isInStock,
        }));
    };
  render() {
    return (
      <div><h2>Product Information</h2>
      <p>Product Name : abc </p>
      <p>
        {this.state.isInStock ? 'Status: In Stock ': 'Status: Out of Stock'}</p>
        <button onClick={this.toggleStock}> Stock Status Toggle </button></div>
    );
  }
}
