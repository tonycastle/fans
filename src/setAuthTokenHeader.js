import axios from "axios";

//some mechanism to add the auth token to every API request automayically
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  console.log(axios.defaults);
};
