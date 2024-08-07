<template>
  <div
    class="flex flex-col p-4 shadow-[0_0_12px_-6px_rgba(3,0,0,0.7)] rounded-lg gap-6"
  >
    <header class="w-full h-12 flex justify-between">
      <div class="h-full flex items-center gap-6">
        <img
          class="h-full rounded-full object-contain"
          src="/public/userImg/user007.jpg"
          alt=""
        />
        <h3 class="text-lg font-medium">小小鞠</h3>
        <span
          v-if="!isLike"
          @click="handleLike"
          title="关注"
          class="iconfont icon-xingxing !text-xl mr-2 cursor-pointer hover:text-yellow-400"
        ></span>
        <span
          v-else
          @click="handleLike"
          title="取消关注"
          class="iconfont icon-xingxing1 !text-xl mr-2 cursor-pointer text-yellow-300"
        ></span>
      </div>
      <div class="h-full flex justify-center items-center cursor-pointer">
        <img class="h-[60%]" src="../assets/more_vert.png" alt="" />
      </div>
    </header>
    <main class="w-full flex flex-col px-10 gap-4">
        <!-- center -->
         <span>
            You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.
         </span>
         <img class="w-full h-[400px] rounded-md" src="/public/background/bg-3.jpg" alt="">
    </main>
    <footer class="">

    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLike = ref(false);

const handleLike = () => {
  isLike.value = !isLike.value;
};
</script>
