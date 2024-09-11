<template>
  <aside class="w-1/4 bg-secondary py-10">
    <div class="flex flex-col items-center">
      <div class="w-32 h-32 bg-gray-300 rounded-full my-6"></div> <!-- 프로필 이미지 자리 -->
      <nav class="w-full my-10">
        <div class="space-y-4 text-center ">
          <div class="menu-item" :class="menu-item-active"><a href="#introduction">Introduction</a></div>
          <div class="menu-item" :class="menu-item-active"><a href="#skill-set">Skill Set</a></div>
          <div class="menu-item" :class="menu-item-active"><a href="#project">Project</a></div>
          <div class="menu-item" :class="menu-item-active"><a href="#contact">Contact</a></div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
// Sidebar에 필요한 추가 로직을 여기에 작성할 수 있습니다.
</script>

<style scoped>
/* Sidebar에 대한 추가 스타일은 여기에 작성합니다. */
</style>
