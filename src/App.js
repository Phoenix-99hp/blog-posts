import React from 'react';
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/blog-posts">
      <div className="App">
        <Switch>
          <Route exact path="/error/:specific" component={Error} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/" component={Posts} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
