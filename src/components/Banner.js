import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <div></div>
        <p>{this.props.subtitle}</p>
        {this.props.children}
      </div>
    )
  }
}
