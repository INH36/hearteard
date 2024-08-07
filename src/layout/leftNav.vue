<template>
  <div
    class="hidden md:flex h-[calc(100vh-48px)] md:w-36 lg:w-64 flex-col overflow-y-auto"
  >
    <div class="flex flex-col gap-4 pt-4 w-full items-center">
      <li
        v-for="item in navList"
        :key="item.key"
        @click="handleNavChange(item)"
        :class="item.isSelected ? 'bg-blue-400 hover:bg-blue-500' : 'hover:bg-slate-300'"
        class="w-full md:px-4 md:gap-5 lg:px-6 lg:gap-10 h-10 shrink-0 transition-all duration-100 cursor-pointer flex items-center"
      >
        <span class="iconfont !text-xl" :class="item.icon"></span>
        {{ item.name }}
      </li>
      <button
        class="w-[90%] p-3 rounded-lg bg-slate-200 text-md shrink-0 md-8 font-medium"
        v-if="isShow"
        @click="handleShowMove"
      >
        查看更多
      </button>
      <button
        v-else
        class="w-[90%] p-3 rounded-lg bg-slate-200 text-md shrink-0 md-8 font-medium"
        @click="handleHideMove"
      >
        收起
      </button>
    </div>
    <hr class="w-[98%] h-[1px] bg-[#b3b3b3] mx-auto my-5" />
    <div class="w-full flex flex-col gap-4 px-4 mb-4">
      <span class="text-xs text-slate-600 flex items-center justify-between">
        猜你想认识的人
      </span>
      <LeftFollowItem
        v-for="item in recommendPeopleData.data"
        :key="item.userid"
        :userData="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import LeftFollowItem from "@/components/LeftFollowItem.vue";
import { getAllCategory } from "@/api/navApi";
import { useUserStore } from "@/stores/module/userStore";
import { recommendUserList } from "@/api/userApi";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const navList: any = ref([]);
const isShow = ref(true);

const navItem = ref(null);

// 获取导航栏数据
const defaultCategoryData: any = ref([]);

// 推荐人物数据
const recommendPeopleData: any = ref([]);

// 获取推荐人物数据
watchEffect(async () => {
  if (userStore.getIsLogin()) {
    recommendPeopleData.value = await recommendUserList;
  }
  console.log(recommendPeopleData.value);
});

// 数据加载
onMounted(async () => {
  const res = await getAllCategory;
  defaultCategoryData.value = res.data;
  // 为每一项添加是否选中的属性
  defaultCategoryData.value.forEach((item: any) => {
    item.isSelected = false;
  });
  console.log(defaultCategoryData.value);

  defaultCategoryData.value[0].isSelected = true;
  navList.value = defaultCategoryData.value.slice(0, 6);
});

// 查看更多
const handleShowMove = () => {
  navList.value = defaultCategoryData.value;
};
// 收起
const handleHideMove = () => {
  navList.value = defaultCategoryData.value.slice(0, 6);
};
// 导航切换
const handleNavChange = (item: any) => {
  router.push('/test')
  navList.value.forEach((item: any) => {
    item.isSelected = false;
  });
  item.isSelected = true;
  console.log(item);
};

watchEffect(() => {
  console.log(navItem.value);
  if (navList.value.length > 6) {
    isShow.value = false;
  } else {
    isShow.value = true;
  }
});
</script>
