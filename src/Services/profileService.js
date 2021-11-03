import axios from "axios";

export const fetchUser = async (setUser, setErrors, route) => {
  try {
    const payload = {
      id: "613bf1f8ef541e8a09d07531",
    };
    const userData = await axios.post(route, payload); //user is hardcoded for now
    userData.data.success
      ? setUser(userData.data.user)
      : setErrors(userData.data.message); //this will overwrite existing errors need to add instead
  } catch (error) {
    console.log(error);
  }
};
