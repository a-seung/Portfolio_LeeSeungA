<template>
  <div class="min-h-screen p-10" @scroll="handleScroll">
    <!-- Introduction Section -->
    <Introduction />

    <!-- Skill Set Section -->
    <SkillSet />
    <Project/>
    <Contact/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Introduction from './Introduction.vue'
import SkillSet from './SkillSet.vue'
import Project from './Project.vue'
import Contact from './Contact.vue'

// 사이드바 배경색 상태
const sidebarBackground = ref('bg-white')

const handleScroll = () => {
  const scrollPosition = window.scrollY
  const skillSetPosition = document.getElementById('skill-set').offsetTop

  // 스크롤 위치가 Skill Set 섹션보다 위에 있을 때 흰색 배경, 그렇지 않으면 기본 배경
  if (scrollPosition < skillSetPosition) {
    sidebarBackground.value = 'bg-white'
  } else {
    sidebarBackground.value = 'bg-secondary' // 기본 색상으로 변경
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
