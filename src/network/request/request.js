import axios from "axios";
//跨域访问需要发送cookie时一定要加
axios.defaults.withCredentials = true;

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://47.97.214.211",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  // 发送真正的的网络请求
  return instance(config);
}
