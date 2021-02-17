import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Users } from "./Users";
import { Friends } from "./Friends";
import { Home } from "./Home";
import { Country } from "./Country";
//@#@#@# step 2 import
import Context from "./Context";

//@#@#@# step 3, have an initial state (optional)
const INITIAL_STATE = {
  name: "zintis",
  friends: [],
};

const COUNTRIES = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

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
            {COUNTRIES.map((country, i) => (
              <Link
                key={i}
                style={{ margin: "0 2px" }}
                to={`/country/${country}`}
              >
                {country}
              </Link>
            ))}
          </nav>
          <Switch>
            <Route path="/about" component={Friends} />
            <Route path="/users" component={Users} />
            <Route path="/country/:country" component={Country} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}
