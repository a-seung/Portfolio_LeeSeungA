<template>
  <div class="flex min-h-screen">
    <!-- 반응형으로 사이드바 또는 슬림바 표시 -->
   <Sidebar v-if="!isMobile" :activeSection="activeSection" />
    <Slimbar v-else :activeSection="activeSection" />


    <!-- Main Content Area for Routed Pages -->
    <div class="flex-1 ml-20 md:ml-60 overflow-y-hidden min-h-screen py-4 md:p-10">
      <RouterView @updateActiveSection="updateActiveSection"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Slimbar from './components/Slimbar.vue'
import { RouterView } from 'vue-router'

const isMobile = ref(window.innerWidth < 768)
const activeSection = ref('introduction')


const updateActiveSection = (newSection) => {
  activeSection.value = newSection
}

// 화면 크기 변경 감지
// sm:640 md:768 lg:1024
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}


onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* 공통 스타일을 여기에 추가할 수 있습니다. */
</style>
