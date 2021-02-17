import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Users } from "./Users";
import { Friends } from "./Friends";
import { Home } from "./Home";
//@#@#@# step 2 import
import Context from "./Context";

//@#@#@# step 3, have an initial state (optional)
const INITIAL_STATE = {
  name: "zintis",
  friends: [],
};

export default function App() {
  //@#@#@# step 4 have the app hold the state
  const [state, setState] = useState(INITIAL_STATE);

  return (
    //@#@#@# step 5 pass the state and setting method to ALL children
    <Context.Provider value={[state, setState]}>
      {state.name}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Friends</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={Friends} />
            <Route path="/users" component={Users} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}
