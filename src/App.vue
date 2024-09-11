<template>
  <div class="flex min-h-screen">
    <!-- Sidebar Component (모든 페이지에 고정) -->
    <Sidebar />

    <!-- Main Content Area for Routed Pages -->
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
/* 공통 스타일을 여기에 추가할 수 있습니다. */
</style>
