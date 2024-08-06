<template>
  <router-view />
</template>
<script setup lang="ts">
// import { useUserStore } from "./stores/module/userStore";
// import { onMounted } from "vue";
// import { Cookie } from "./utils/storage";
// import { getUserData } from "./api/userApi";

// const userStore = useUserStore();

// const setUser = async () => {
//   const res = await getUserData;
//   return res.data;
// };

// // 读取cookie
// onMounted(async() => {
//   const userData = Cookie.get("UUID");
//   if (userData) {
//     userStore.setUserData(userData);
//   } else {
//     const res = await setUser();
//     Cookie.set("UUID", res, 3000);
//     userStore.setUserData(res);
//   }
// });
</script>
