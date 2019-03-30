import React, { Component } from 'react'
import Route from 'react-router-dom/Route';
import TermsConditions from '../Footer/TermsConditions.js';
import About from '../About/About.js'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/terms" exact render={TermsConditions} />
        <Route path="/about" exact render={About} />
      </div>
    )
  }
}
