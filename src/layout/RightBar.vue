<template>
  <div class="hidden lg:flex flex-col gap-4 p-4 w-[25%]">
    <div class="w-full">
      <header class="flex gap-2 items-center">
        <img class="w-10 h-10 object-cover" src="../assets/gift.png" alt="" />
        <span>
          <b class="font-bold">Pola Foster</b>
          and
          <b class="font-bold">3 other friends</b>
          hav a birhday today
        </span>
      </header>
    </div>
    <div class="mt-4 w-full rounded-md overflow-hidden">
      <img class="w-full aspect-video object-cover" src="../assets/ad.jpg" alt="" />
    </div>
    <div class="w-full mt-4">
      <header class="flex justify-between items-center">
        <span class="text-xl font-bold">Online Friends</span>
        <span class="text-sm text-gray-500 cursor-pointer hover:text-blue-600">See all</span>
      </header>
        <div class="flex flex-col gap-2 mt-2">
          <OnlintFriendCar />
          <OnlintFriendCar />
          <OnlintFriendCar />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OnlintFriendCar from "@/components/OnlintFriendCar.vue";


</script>
