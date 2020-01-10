import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import WireSummary from './WireSummary';
import WireDetail from './WireDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/wires"/>
        </Route>
        <Route exact path="/wires" component={WireSummary}/>
        <Route exact path="/wires/:wireId" component={WireDetail}/>
      </Router>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);