import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json"
});

const getAccessToken =  () => {
  return "Bearer " + localStorage.getItem("access_token") 
}

export { getAccessToken }