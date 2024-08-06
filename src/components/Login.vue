<template>
  <div
    class="w-[300px] h-[400px] -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-white rounded-md flex flex-col items-center p-4"
  >
    <h1
      ref="title"
      class="text-2xl text-black flex items-center justify-center font-bold mt-4 writer overflow-hidden"
    >
      Heartwart
    </h1>
    <hr class="w-full mt-4" />

    <!-- 登录表单 -->
    <el-form
      v-if="isShow"
      :module="loginForm"
      class="flex-1 flex flex-col items-center w-full gap-4"
    >
      <div class="flex items-center justify-around w-3/4 mt-6">
        <span class="font-medium relative flex">Login</span>
      </div>
      <div
        class="w-[90%] h-8 flex items-center gap-4 border border-solid border-slate-400 rounded-md"
      >
        <input
          v-model="loginForm.username"
          type="text"
          class="bg-transparent px-4 text-black"
          placeholder="username"
        />
      </div>
      <div
        class="w-[90%] h-8 flex items-center gap-4 border border-solid border-slate-400 rounded-md"
      >
        <el-input
          v-model="loginForm.password"
          style="width: 100%; height: 100%"
          type="password"
          placeholder="password"
          show-password
          class="border-none shadow-none px-4 text-black"
          input-style="color: black"
        ></el-input>
      </div>
      <span class="flex items-center text-xs w-full px-4 justify-between">
        <div class="flex gap-2 items-center">
          <input type="checkbox" v-model="loginForm.isRemember" />
          <p>记住密码</p>
        </div>
        <RouterLink to="/" class="">
          <p class="underline text-xs">忘记密码</p>
        </RouterLink>
      </span>
      <div class="flex items-center justify-around w-full mt-8">
        <button
          @click="loginChilck"
          class="w-[90%] h-8 bg-cyan-500 rounded-md text-white text-sm hover:bg-cyan-400"
        >
          Login
        </button>
      </div>
      <div
        @click="switchShow"
        class="text-sm absolute bottom-6 right-6 text-gray-400 cursor-pointer hover:text-cyan-500"
      >
        to register >
      </div>
    </el-form>
    <!-- 注册表单 -->
    <div v-else class="flex-1 flex flex-col items-center w-full gap-4">
      <div class="flex items-center justify-around w-3/4 mt-6">
        <span class="font-medium relative flex">Register</span>
      </div>
      <el-form
        :rules="rules"
        :model="registerForm"
        status-icon
        class="flex-1 w-full flex flex-col items-center"
      >
        <el-form-item
          prop="username"
          class="w-[90%] h-8 flex items-center border border-solid border-slate-400 rounded-md"
        >
          <el-input
            v-model="registerForm.username"
            type="text"
            class="bg-transparent px-4 text-black w-full text-sm"
            input-style="color: black"
            placeholder="请输入你的用户名"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          class="w-[90%] h-8 flex items-center gap-4 border border-solid border-slate-400 rounded-md"
        >
          <el-input
            v-model="registerForm.password"
            style="width: 100%; height: 100%"
            type="password"
            placeholder="请输入你的密码"
            show-password
            class="border-none shadow-none px-4 text-black"
            input-style="color: black"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="password_again"
          class="w-[90%] h-8 flex items-center gap-4 border border-solid border-slate-400 rounded-md"
        >
          <el-input
            v-model="registerForm.password_again"
            style="width: 100%; height: 100%"
            type="password"
            placeholder="请再一次输入"
            show-password
            class="border-none shadow-none px-4 text-black"
            input-style="color: black"
          ></el-input>
        </el-form-item>
        <div class="flex items-center justify-around w-full mt-4">
          <button
            @click="loginChilck"
            class="w-[90%] h-8 bg-cyan-500 rounded-md text-white text-sm hover:bg-cyan-400"
          >
            Register
          </button>
        </div>
        <div
          @click="switchShow"
          class="text-sm absolute bottom-6 right-6 text-gray-400 cursor-pointer hover:text-cyan-500"
        >
          to login >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserData } from "@/api/userApi";
import { ElNotification } from "element-plus";
import { reactive, ref, watchEffect } from "vue";
import { useUserStore } from "@/stores/module/userStore";
import { Cookie } from "@/utils/storage";

const userStore = useUserStore();

// 登录表单
const loginForm = reactive({
  username: "", // 用户名
  password: "", // 密码
  isRemember: false,
});

// 注册表单
const registerForm = reactive({
  username: "",
  password: "",
  password_again: "",
});

// 表单显示
const isShow = ref(true);
const switchShow = () => {
  isShow.value = !isShow.value;
};

// 用户名校验 字符数符数大于3位
const usernameRules = [
  {
    validator: (rule: any, value: string, callback: Function) => {
      if (value.length < 3) {
        callback(new Error("用户名长度不能小于3位"));
      } else {
        callback();
      }
    },
    trigger: "change",
  },
];
// 密码校验 长度大于等于6
const passwordRules = [
  {
    validator: (rule: any, value: string, callback: Function) => {
      if (value.length < 6) {
        callback(new Error("密码长度不能小于6位"));
      } else {
        callback();
      }
    },
    trigger: "change",
  },
];
const againPwsEules = [
  {
    validator: (rule: any, value: string, callback: Function) => {
      if (value !== registerForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    },
    trigger: "change",
  },
];

// 注册表单验证规则
const rules = {
  username: usernameRules,
  password: passwordRules,
  password_again: againPwsEules,
};

// 登录
const loginChilck = async (e: any) => {
  e.preventDefault();
  if (loginForm.username === "" || loginForm.password === "") {
    return ElNotification({
      title: "提示",
      message: "请输入用户名和密码",
      type: "warning",
      duration: 2000,
    });
  }
  const userData = await getUserData;
  if (loginForm.isRemember) {
    userStore.setUserData(userData.data);
    Cookie.set("UUID", userData.data, 1 * 60 * 1000);
  }
  userStore.setUserData(userData.data);
  return ElNotification({
    title: "提示",
    message: "登录成功",
    type: "success",
    duration: 2000,
  });
};

watchEffect(() => {
  console.log(loginForm.isRemember);
});

</script>
