import { request } from "@/network/request/request.js";

export function register(data) {
  return request({
    method: "post",
    url: "/teacher/register",
    data: data,
  });
}
