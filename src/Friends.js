import { useState, useEffect, useContext, useRef } from "react";
import { getUsers } from "./randomUserService";
import Context from "./Context";

export function Friends({ country = "" }) {
  const [state, setState] = useContext(Context);
  //   const currentCountry = useRef(country);
  //   console.log(country);
  useEffect(() => {
    refreshUsers();
  }, [country]);

  async function refreshUsers() {
    const options = {
      numberOfUsersToGet: 10,
      country,
    };
    console.log(options);
    const users = await getUsers(options);
    console.log(users);
    let newState = { ...state };
    newState.users = users;
    setState(newState);
  }

  return (
    <>
      <h2>Friends</h2>
      <ul>
        {state?.users?.map((u, i) => {
          return (
            <li
              key={i}
            >{`${u.name.first} ${u.name.last} - From ${u.location.country}`}</li>
          );
        })}
      </ul>
      <button onClick={refreshUsers}>Refresh</button>
    </>
  );
}
