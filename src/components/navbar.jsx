import React, { Component } from 'react'

export class navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
          <a className="navbar-brand" href="goo">Navbar <span className="badge rounded-pill bg-success">{this.props.totalCounter}</span></a>
          </div>
        </nav>
    )
  }
}

export default navbar
