import React from 'react';
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/blog-posts">
      <div className="App">
        <Switch>
          <Route exact path="/error/characters"
            render={props => (<Error {...props} specific={"characters"} />)} />
          <Route exact path="/error/comment"
            render={props => (<Error {...props} specific={"comment"} />)} />
          <Route exact path="/error"
            render={props => (<Error {...props} />)} />
          <Route exact path="/"
            render={props => (<Posts {...props} />)} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
