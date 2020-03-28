import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//styles
import './App.css';

import Header from "./components/Header";
import Home from "./containers/Home";

function App() {
  return (
    <div className="SiteWrapper">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
           <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;