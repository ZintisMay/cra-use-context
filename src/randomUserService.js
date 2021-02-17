import axios from "axios";

export const getUsers = async ({ numberOfUsersToGet, country } = {}) => {
  const URL = `https://randomuser.me/api/?results=${
    numberOfUsersToGet || 5
  }&nat=${country}`;
  console.log(URL);
  return axios
    .get(URL)
    .then((res) => {
      console.log(res);
      return res?.data?.results;
    })
    .catch((err) => console.log(err));
};
