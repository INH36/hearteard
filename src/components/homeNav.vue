<template>
  <div class="md:hidden" @click="isOpen = !isOpen">
    <div class="flex flex-col gap-[4.5px] cursor-pointer">
      <div
        class="w-6 h-1 bg-zinc-950 origin-left ease-in-out duration-500"
        :class="isOpen ? 'rotate-45' : ''"
      ></div>
      <div
        class="w-6 h-1 bg-zinc-950 ease-in-out duration-500"
        :class="isOpen ? 'opacity-0' : ''"
      ></div>
      <div
        class="w-6 h-1 bg-zinc-950 origin-left ease-in-out duration-500"
        :class="isOpen ? '-rotate-45' : ''"
      ></div>
    </div>

    <div :class="isOpen ? 'flex' : 'hidden'" class="absolute right-0 top-[48px] w-[40vw] h-[calc(100vh-48px)]">
        <div class="bg-gray-400 opacity-50 w-full h-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>
