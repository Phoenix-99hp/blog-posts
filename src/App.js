import React from 'react';
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/"
          render={props => (<Posts {...props} />)} />
        <Route exact path="/error"
          render={props => (<Error {...props} />)} />
        <Route exact path="/error/comment"
          render={props => (<Error {...props} specific={"comment"} />)} />
        <Route exact path="/error/characters"
          render={props => (<Error {...props} specific={"characters"} />)} />
      </div >
    </Router>
  );
}

export default App;
