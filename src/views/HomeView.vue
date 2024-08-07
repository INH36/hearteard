<template>
  <div class="w-full h-full">
    <TopNav />
    <div class="flex justify-between w-full h-full">
      <LeftNav />
       <router-view/>
    </div>
    <div
      v-show="!userStore.getIsLogin()"
      class="z-20 w-full h-full fixed bg-slate-300/65 top-0"
    >
      <Login />
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/Login.vue";
import LeftNav from "@/layout/LeftNav.vue";
import TopNav from "@/layout/TopNav.vue";

import { useUserStore } from "@/stores/module/userStore";
import { Cookie } from "@/utils/storage";
import { onMounted } from "vue";
const userStore = useUserStore();

onMounted(() => {
  const userData = Cookie.get("UUID");
  if (userData) {
    userStore.setUserData(userData);
  }
});
</script>
