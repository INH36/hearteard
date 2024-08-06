// 用户相关仓库
import { defineStore } from "pinia";
import type { userDataType, userType } from "../type/userType";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
    const user: userType = reactive({
        isLogin: false,
        userData: null
    });
    // 获取用户数据 登录获取 失败为null
    const getUserData = () => {
        if (!user.isLogin) return
        return user.userData;
    };
    // 清空用户数据
    const clearUserData = () => {
        user.isLogin = false;
        user.userData = null;
    };
    // 获取用户是否登录
    const getIsLogin = () => {
        return user.isLogin;
    };
    // 设置用户数据
    const setUserData = (data: userDataType) => {
        user.isLogin = true;
        user.userData = data;
    };
    return {
        getUserData,
        clearUserData,
        setUserData,
        getIsLogin
    }
});