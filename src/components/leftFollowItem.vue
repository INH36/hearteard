<template>
  <li
    class="w-full h-14 cursor-pointer flex lg:justify-between md:justify-center items-center px-1 rounded-lg hover:bg-slate-200 transition-all duration-200 ease-in"
  >
    <el-popover
      placement="top"
      width="300"
      popper-style="padding:0; border-radius:10px; overflow:hidden; margin-left:100px"
    >
      <template #reference>
        <div class="flex items-center">
          <img
            class="h-12 w-12 rounded-[50%] object-cover"
            :src="props.userData.avatar"
            alt=""
          />
          <span
            class="lg:block md:hidden text-lg font-medium tracking-widest ml-4"
            >{{ props.userData.name }}
          </span>
        </div>
      </template>
      <template #default>
        <div class="w-full h-48 relative flex flex-col">
          <img
            class="w-full h-20 object-cover"
            src="/src/assets/bg_user.jpg"
            alt=""
          />
          <div class="flex-1 flex">
            <div class="flex-[2] relative">
              <img
                class="w-16 h-16 border-2 border-white border-solid object-cover absolute rounded-[50%] top-[-25%] left-[50%] translate-x-[-50%]"
                :src="props.userData.avatar"
                alt=""
              />
              <span
                class="text-lg font-medium tracking-widest text-black absolute bottom-[40%] left-[50%] translate-x-[-50%]"
                >{{ props.userData.name}}</span
              >
            </div>
            <div class="flex-[3] flex pt-2 justify-around">
              <li class="flex flex-col items-center w-12">
                <span class="text-xs">关注</span>
                <span
                  class="text-xl text-black hover:text-cyan-400 cursor-pointer"
                  >{{ props.userData.like }}</span
                >
              </li>
              <li class="flex flex-col items-center w-12">
                <span class="text-xs">粉丝</span>
                <span
                  class="text-xl text-black hover:text-cyan-400 cursor-pointer"
                  >{{ props.userData.follow }}</span
                >
              </li>
              <li class="flex flex-col items-center w-12">
                <span class="text-xs">博客</span>
                <span
                  class="text-xl text-black hover:text-cyan-400 cursor-pointer"
                  >{{  props.userData.blog }}</span
                >
              </li>
            </div>
          </div>
          <div
            class="absolute w-48 h-8 bottom-2 gap-3 flex left-[50%] translate-x-[-50%]"
          >
            <el-button class="flex-1 h-full" type="primary">关注</el-button>
            <el-button class="flex-1 h-full">私信</el-button>
          </div>
        </div>
      </template>
    </el-popover>
    <span
      class="iconfont icon-xingxing !text-xl mr-2 lg:block md:hidden cursor-pointer hover:text-yellow-400"
      v-if="!isFollow"
      @click="handleFolow"
      title="关注"
    ></span>
    <span
      class="iconfont icon-xingxing1 !text-xl mr-2 lg:block md:hidden text-yellow-300"
      @click="handleFolow"
      v-else
      title="取消关注"
    ></span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  userData: {
    type: Object,
    default: () => {
      return {
        avatar: "",
        email:"",
        lastLginTime: "",
        name: "",
        status: "",
        phone: "",
        userid: "",
        like: 0,
        follow: 0,
        blog: 0,
      };
    },
  },
});

import { ref } from "vue";


// 是否关注
const isFollow = ref(false);
const handleFolow = () => {
  isFollow.value = !isFollow.value;
};
</script>
