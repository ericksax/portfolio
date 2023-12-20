import axios from "axios";
const proxyAnywhere = "https://cors-proxy.htmldriven.com/?url=";
export const api = axios.create({
  baseURL: proxyAnywhere + "https://pinned.thrzl.xyz/",
});
