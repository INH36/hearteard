<template>
  <div class="flex-1 flex h-[calc(100vh-48px)] flex-col overflow-y-auto">
    <div class="w-full h-80 flex-shrink-0 relative">
      <img
        class="w-full h-56 object-cover"
        src="/public/background/bg-3.jpg"
        alt=""
      />
      <div
        class="w-36 h-36 rounded-full overflow-hidden border-2 border-solid border-white absolute left-[50%] -translate-x-1/2 bottom-16"
      >
        <img
          class="w-full h-full object-cover"
          src="/public/userImg/user006.jpg"
          alt=""
        />
      </div>
      <h1
        class="absolute left-1/2 -translate-x-1/2 font-bold text-2xl bottom-8"
      >
        username
      </h1>
      <span
        class="absolute left-1/2 -translate-x-1/2 text-sm text-gray-400 bottom-2"
        >个人简介</span
      >
    </div>
    <div class="flex flex-1 gap-8 px-4">
      <Main />
      <RightBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Main from "@/layout/Main.vue";
import RightBar from "@/layout/RightBar.vue";

</script>
