import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    const { hero, children } = this.props
    return <header className={hero}>{children}</header>
  }

  static defaultProps = {
    hero: 'defaultHero',
  }
}
