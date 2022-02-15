import axios from "axios";

const instance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  headers: {
    "X-API-KEY": "lZmXRyVGhnRr08YMP1aWoKJrKwSiHCaio0t3uK4Y",
  },
});

export default instance;
