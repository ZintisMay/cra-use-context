import { useState, useEffect, useContext } from "react";
import { getUsers } from "./randomUserService";
import Context from "./Context";

export function Friends() {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    // iife
    if (state.users.length > 0) return;
    refreshUsers();
  }, []);

  async function refreshUsers() {
    const users = await getUsers();

    let newState = { ...state };
    newState.users = users;
    setState(newState);
  }

  return (
    <>
      <h2>Friends</h2>
      <ul>
        {state?.users?.map((u) => {
          return <li>{`${u.name.first} ${u.name.last}`}</li>;
        })}
      </ul>
      <button onClick={refreshUsers}>Refresh</button>
    </>
  );
}
