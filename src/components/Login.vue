<template>
  <div class="login">
    <div class="login_body">
      <div class="login_body1">
        <img src="../assets/img/logo.png" />
      </div>
      <div class="login_body2">
        <div>
          <span class="span1">信管工作室</span>
        </div>
        <div>
          <span class="span2">专业的代码刷题库</span>
        </div>
      </div>
      <div class="login_body3">
        <div>
          <input type="text" placeholder="请输入用户名" v-model="teaAcount" />
        </div>
        <div>
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div>
          <button @click="btnLogin">登录</button>
        </div>
        <div>
          <span @click="ToRegister">没有账号？马上注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "@/network/teacher/login.js";
export default {
  name: "Login",
  data() {
    return {
      teaAcount: "",
      password: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.login {
  max-width: 1056px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.login_body {
  margin: auto;
  width: 400px;
  margin-top: 96px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  padding: 40px 8px 16px;
  margin-bottom: 64px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
}
img,
span,
input,
button {
  display: table;
  margin: 0 auto;
}
.login_body1 {
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
}
img {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  vertical-align: middle;
}
.span1 {
  font-size: 32px;
  line-height: 1.2;
  color: #262626;
}
.span2 {
  color: #595959;
  margin-top: 8px;
  font-size: 18px;
}
.login_body3 {
  margin-top: 30px;
}
input {
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
}
button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #4169E1;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 20px;
  border-radius: 2px;
}
span {
  margin-top: 20px;
  cursor: pointer;
}
span:hover {
  color: #4169E1;
}
</style>