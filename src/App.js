import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  country = 'in';

  state = { progress: 0 }

  setProgress = (progress)=>{ this.setState({progress: progress}) }

  render() {
    return (
        <div>
          <Router>
          <NavBar/>
          <LoadingBar
            color='#ADEFD1FF'
            progress={this.state.progress}
            length={5}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="home"  pageSize={this.pageSize} country={this.country} category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business"  pageSize={this.pageSize} country={this.country} category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment"  pageSize={this.pageSize} country={this.country} category="entertainment"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health"  pageSize={this.pageSize} country={this.country} category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science"  pageSize={this.pageSize} country={this.country} category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports"  pageSize={this.pageSize} country={this.country} category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology"  pageSize={this.pageSize} country={this.country} category="technology"/></Route>
          </Switch>
          </Router>
        </div>
    )
  }
}