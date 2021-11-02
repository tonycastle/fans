import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8800",
  headers: {
    "Content-type": "application/json",
  },
});

//some mechanism to add the auth token to every API request automayically
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
    /*if setting null does not remove `Authorization` header then try     
           delete axios.defaults.headers.common['Authorization'];
         */
  }
};
