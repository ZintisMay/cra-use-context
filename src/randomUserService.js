import axios from "axios";

export const getUsers = async (numberOfUsersToGet = 5) => {
  return axios
    .get(`https://randomuser.me/api/?results=${numberOfUsersToGet}`)
    .then((res) => {
      console.log(res);
      return res?.data?.results;
    })
    .catch((err) => console.log(err));
};
