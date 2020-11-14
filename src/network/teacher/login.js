import { request } from "@/network/request/request.js";

export function login(data) {
  return request({
    method: "get",
    url: "/teacher/login",
    data: data,
  });
}
