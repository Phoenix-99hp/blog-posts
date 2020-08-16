import React from 'react';
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/blog-posts">
      <div className="App">
        <Route exact path="/" component={Posts} />
      </div >
    </Router>
  );
}

export default App;
