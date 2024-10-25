import axios from "axios";

//https://viacep.com.br/ws/
const Api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default Api;
