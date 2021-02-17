import React, { useState, useEffect, useContext } from "react";
//@#@#@# step 6 import Context object
import Context from "./Context";
import { Friends } from "./Friends";

export function Country(props) {
  //@#@#@# step 7 use context to get state and setter
  const [state, setState] = useContext(Context);
  const { country } = props.match.params;

  console.log(state);

  return (
    <>
      {country}
      <Friends country={country} />
    </>
  );
}
