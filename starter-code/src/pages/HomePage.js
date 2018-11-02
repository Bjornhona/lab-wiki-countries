import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render () {
    return (
      <div>
        HomePage
        <Link to='/ESP'>Get some info about Countries</Link>
      </div>
      )
    }
  }
  
  export default HomePage;