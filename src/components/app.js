import React, { Component } from 'react';
import Header from './header';
import '../styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}

