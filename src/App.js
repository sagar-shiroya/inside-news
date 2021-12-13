import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 12;
  country = 'in';
  render() {
    return (
        <div>
          <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/"><News key="home"  pageSize={this.pageSize} country={this.country} category="general"/></Route>
            <Route exact path="/business"><News key="business"  pageSize={this.pageSize} country={this.country} category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment"  pageSize={this.pageSize} country={this.country} category="entertainment"/></Route>
            <Route exact path="/health"><News key="health"  pageSize={this.pageSize} country={this.country} category="health"/></Route>
            <Route exact path="/science"><News key="science"  pageSize={this.pageSize} country={this.country} category="science"/></Route>
            <Route exact path="/sports"><News key="sports"  pageSize={this.pageSize} country={this.country} category="sports"/></Route>
            <Route exact path="/technology"><News key="technology"  pageSize={this.pageSize} country={this.country} category="technology"/></Route>
          </Switch>
          </Router>
        </div>
    )
  }
}