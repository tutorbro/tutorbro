import axios from "axios";

const detectIPInfo = () => {
  return axios
    .get("https://ipinfo.io/json")
    .then((res) => {
      window.localStorage.setItem("geo", res.data.country);
    })
    .then((data) => data);
};
export default detectIPInfo;
