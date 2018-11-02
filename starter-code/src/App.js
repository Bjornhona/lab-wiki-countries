import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetail from './components/CountryDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/:id'} component={CountryDetail} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
