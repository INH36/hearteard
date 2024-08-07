<template>
    <div class="flex-1 p-4 flex flex-col gap-12">
        <UserCart/>
        <div class="flex-1 flex gap-4 flex-col">
            <Post></Post>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserCart from '@/components/UserCart.vue';
import Post from '@/components/Post.vue';
    
</script>