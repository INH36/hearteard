<template>
  <div
    class="flex items-center justify-between h-12 w-full bg-blue-500 lg:px-8 px-4 sticky top-0 z-10"
  >
    <!-- left -->
    <div class="flex items-center w-[25%]">
      <RouterLink to="/">
        <i class="text-xl font-extrabold text-white">Heartward</i>
      </RouterLink>
    </div>
    <!-- center -->
    <div
      class="flex items-center h-[58%] w-[45%] bg-white rounded-3xl px-2 max-w-[768px]"
    >
      <el-icon class="">
        <Search />
      </el-icon>
      <input
        class="w-[95%] ml-3 text-sm pr-2"
        type="text"
        placeholder="Search for friend, post or video"
      />
    </div>
    <!-- right -->
    <div class="hidden md:flex items-center justify-end gap-16 flex-1 h-[70%]">
      <div class="flex gap-2 items-center">
        <RouterLink to="/">
          <el-tooltip content="您有好友申请">
            <span
              class="iconfont icon-user-fill flex items-center !text-xl w-8 h-8 text-white relative cursor-pointer hover:animate-bounceUp"
            >
              <li
                class="absolute top-0 right-2 w-2 h-2 rounded-[50%] bg-red-600 text-[8px]"
              ></li>
            </span>
          </el-tooltip>
        </RouterLink>
        <RouterLink to="/">
          <el-tooltip content="您有消息未回复">
            <span
              class="iconfont icon-chat flex items-center !text-xl w-8 h-8 text-white relative cursor-pointer hover:animate-bounceUp"
              ><li
                class="absolute top-0 right-2 w-2 h-2 rounded-[50%] bg-red-600 text-[8px]"
              ></li
            ></span>
          </el-tooltip>
        </RouterLink>
        <RouterLink to="/">
          <el-tooltip content="您有新的通知">
            <span
              class="iconfont icon-notifications flex items-center !text-xl w-8 h-8 text-white relative cursor-pointer hover:animate-bounceUp"
              ><li
                class="absolute top-0 right-2 w-2 h-2 rounded-[50%] bg-red-600 text-[8px]"
              ></li
            ></span>
          </el-tooltip>
        </RouterLink>
        <RouterLink to="/">
          <el-tooltip content="历史记录">
            <span
              class="iconfont icon-lishi flex items-center !text-xl w-8 h-8 text-white relative cursor-pointer hover:animate-bounceUp"
            ></span>
          </el-tooltip>
        </RouterLink>
      </div>
      <div class="w-8 h-8" title_name="头像/登录/注册">
        <RouterLink to="/" class="hidden">
          <el-Tooltip content="登录/注册">
            <el-avatar class="!w-full !h-full" icon="UserFilled" />
          </el-Tooltip>
        </RouterLink>

        <el-popover
          width="200"
          popper-style="padding:0; border-radius:10px; overflow:hidden"
        >
          <template #reference>
            <img
              class="object-cover rounded-[50%] h-8 w-8"
              :src="userData?.avatar"
              alt=""
            />
          </template>
          <template #default>
            <div class="flex flex-col items-center gap-3">
              <div
                ref="item_bg"
                class="w-full h-24 relative top-0 bg-black flex justify-center bg-cover"
              >
                <img
                  class="object-cover rounded-[50%] w-16 h-16 border-white border-2 border-solid absolute top-12"
                  :src="userData?.avatar"
                  alt=""
                />
              </div>
              <h1 class="text-blue-500 text-lg font-medium">
                {{ userData?.username }}
              </h1>
              <div
                class="flex w-[90%] items-center justify-between relative top-[-10px] px-3"
              >
                <div class="flex flex-col items-center">
                  <span class="text-black text-xl">{{ userData?.like }}</span>
                  <span class="text-xs">关注</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-black text-xl">{{ userData?.follow }}</span>
                  <span class="text-xs">粉丝</span>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-black text-xl">{{ userData?.blog }}</span>
                  <span class="text-xs">博客</span>
                </div>
              </div>
              <div class="w-full flex flex-col gap-3 items-center">
                <li
                  class="rounded-lg h-8 w-[90%] hover:bg-slate-100 transition-colors duration-200 ease-in flex items-center px-2 cursor-pointer"
                >
                  <span
                    class="iconfont icon-gerenzhongxin1 flex items-center !text-base w-6 h-6 text-black relative cursor-pointer"
                  ></span>
                  个人主页
                  <span
                    class="iconfont icon-jinrujiantou flex items-center !text-base w-6 h-6 text-black absolute right-4"
                  ></span>
                </li>
                <li
                  class="rounded-lg h-8 w-[90%] hover:bg-slate-100 transition-colors duration-200 ease-in flex items-center px-2 cursor-pointer"
                >
                  <span
                    class="iconfont icon-a-bokeguanli_huaban1 flex items-center !text-base w-6 h-6 text-black relative cursor-pointer"
                  ></span>
                  博客管理
                  <span
                    class="iconfont icon-jinrujiantou flex items-center !text-base w-6 h-6 text-black absolute right-4"
                  ></span>
                </li>
                <hr class="w-[90%]" />
                <li
                  class="h-8 w-[90%] mb-2 px-2 flex items-center hover:bg-slate-100 transition-colors duration-200 rounded-lg ease-in cursor-pointer"
                >
                  <span
                    class="iconfont icon-zhuxiaodenglu flex items-center !text-base w-6 h-6 text-black relative"
                  ></span>
                  退出登录
                  <span
                    class="iconfont icon-jinrujiantou flex items-center !text-base w-6 h-6 text-black absolute right-4"
                  ></span>
                </li>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
    <HomeNav />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useUserStore } from "@/stores/module/userStore";
import HomeNav from "@/components/HomeNav.vue";
const userStore = useUserStore();
const userData = ref(userStore.getUserData());

const item_bg = ref<HTMLElement | null>(null);

watchEffect(() => {
  userData.value = userStore.getUserData();
  if (item_bg.value)
    item_bg.value.style.backgroundImage = `url(${userData.value?.background})`;
});
</script>
