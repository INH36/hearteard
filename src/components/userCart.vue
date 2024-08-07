<template>
    <div class="w-full h-56 flex flex-col items-center rounded-lg shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
        <div class="flex-1 w-full flex items-center gap-4 px-4">
            <img class="w-14 h-14 object-cover rounded-full" src="/public/userImg/user001.jpg" alt="">
            <span class=" text-base text-gray-400">What do you want to share?</span>
        </div>
        <hr class=" w-11/12 border-black">
        <div class="flex-1 flex w-full px-6 items-center justify-between">
            <div class="w-4/5 flex items-center justify-between">
                <div class="flex items-center gap-2 cursor-pointer">
                    <img class="w-8 h-8 object-contain" src="../assets/tab/photo.png" alt="">
                    <span>photo</span>
                </div> 
                <div class="flex items-center gap-2 cursor-pointer">
                    <img class="w-8 h-8 object-contain" src="../assets/tab/VideoMusic.png" alt="">
                    <span>Vidieo</span>
                </div> 
                <div class="flex items-center gap-2 cursor-pointer">
                    <img class="w-8 h-8 object-contain" src="../assets/tab/tab.png" alt="">
                    <span>Tab</span>
                </div> 
                <div class="flex items-center gap-2 cursor-pointer">
                    <img class="w-8 h-8 object-contain" src="../assets/tab/mood.png" alt="">
                    <span>Mood</span>
                </div> 
                
            </div>
            <button class="px-4 py-2 bg-green-600 text-xs rounded-xl text-white tracking-widest hover:bg-green-700 cursor-pointer">分享</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>