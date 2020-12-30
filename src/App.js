import React from "react";
import "./App.css";
import { Home } from "./Component/Home";
import { AddUser } from "./Component/AddUser.js";
import { EditUser } from "./Component/EditUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <div className="app">
      <div
        style={{
          maxWidth: "30rem",
          margin: "4rem auto"
        }}
      >
        <GlobalProvider>
          <Router>
            <Switch>
              <Route exact path="/add" component={AddUser} />
              <Route path="/edit/:id" component={EditUser} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </GlobalProvider>
      </div>
    </div>
  );
};

export default App;
