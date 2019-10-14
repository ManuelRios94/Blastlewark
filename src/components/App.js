import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';


import Header from './Shared/Header/Header';
import Content from './Shared/Content/Content';
import Footer from './Shared/Footer/Footer';

class App extends Component {
  static propTypes = {
      children: PropTypes.object.isRequired
  }
  render() {
      const { children } = this.props;
      return (
      <div className="App">
          <Header />
          <Content body={children} />
          <Footer />
      </div>
      );
  }
}

export default App;

