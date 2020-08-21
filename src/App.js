import React from 'react';
import Posts from "./pages/Posts";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";

function App() {
  return (
    <Router basename="/blog-posts">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/error/:specific" component={Error} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
