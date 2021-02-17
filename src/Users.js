import React, { useState, useEffect, useContext } from "react";
//@#@#@# step 6 import Context object
import Context from "./Context";

export function Users() {
  //@#@#@# step 7 use context to get state and setter
  const [state, setState] = useContext(Context);
  console.log(state);

  return (
    <>
      <h2>User: {state.name}</h2>
      <p>{state.counter}</p>
      <input
        value={state.name}
        onChange={(e) => {
          console.log(e.target.value);
          //@#@#@# step 8 copy, mutate state to change application state
          const newState = { ...state };
          newState.name = e.target.value;
          setState(newState);
        }}
      />
    </>
  );
}
