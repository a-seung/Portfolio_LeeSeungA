<template>
  <div>
    <!-- 햄버거 아이콘 (작은 화면에서만 표시) -->
    <button class="fixed top-4 left-6 z-10" @click="toggleSlimbar" aria-label="Toggle menu">
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- Slimbar 메뉴 (모바일에서 아이콘만 표시) -->
    <aside :class="['fixed top-0 left-0 h-full bg-secondary p-4 transition-transform transform w-16', slimbarOpen ? 'translate-x-0' : '-translate-x-full']">
      <nav class="flex flex-col items-center space-y-6 mt-16">
        <div class="slim-bar-icon">
          <a href="#introduction"><i class="fa-solid fa-user"></i></a>
        </div>
        <div class="slim-bar-icon">
          <a href="#skill-set"><i class="fa-solid fa-cogs"></i></a>
        </div>
        <div class="slim-bar-icon">
          <a href="#project"><i class="fa-solid fa-folder"></i></a>
        </div>
        <div class="slim-bar-icon">
          <a href="#contact"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </nav>
    </aside>

    <!-- 오버레이 (Slimbar가 열렸을 때 클릭 시 Slimbar 닫힘) -->
    <div v-if="slimbarOpen" class="fixed inset-0" @click="toggleSlimbar"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slimbarOpen = ref(false);

const toggleSlimbar = () => {
  slimbarOpen.value = !slimbarOpen.value;
};
</script>

<style scoped>
/* Slimbar에 대한 추가 스타일 */
</style>
