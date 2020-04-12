import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Route exact path="/" component={UserList} />
      </div>
    </Router>
  );
}

export default App;
