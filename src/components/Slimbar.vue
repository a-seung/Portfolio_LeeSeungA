<template>
  <aside class="fixed top-0 left-0 h-full bg-secondary p-4 w-12">
    <nav class="flex flex-col items-center space-y-6">
     <div @click.prevent="goHome" class="slim-bar-icon" ><i class="fa-solid fa-house"></i></div>
      <div :class="['slim-bar-icon', activeSection === 'introduction' ? 'slim-bar-icon-active' : '']">
        <button @click.prevent="navigateToSection('introduction')"><i class="fa-solid fa-user"></i></button>
      </div>
      <div :class="['slim-bar-icon', activeSection === 'skill-set' ? 'slim-bar-icon-active' : '']">
        <button @click.prevent="navigateToSection('skill-set')"><i class="fa-solid fa-screwdriver-wrench"></i></button>
      </div>
      <div :class="['slim-bar-icon', activeSection === 'project' ? 'slim-bar-icon-active' : '']">
        <button @click.prevent="navigateToSection('project')"><i class="fa-solid fa-folder-open"></i></button>
      </div>
      <div :class="['slim-bar-icon', activeSection === 'contact' ? 'slim-bar-icon-active' : '']">
        <button @click.prevent="navigateToSection('contact')"><i class="fa-solid fa-phone"></i></button>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 라우터 인스턴스 가져오기
const router = useRouter();

// Home 페이지로 이동하는 함수
const goHome = () => {
  router.push('/');
};


const navigateToSection = (sectionId) => {
  if (router.currentRoute.value.path !== '/') {
    // '/project/1' 등 다른 경로에서 홈('/')으로 이동한 후 해시 적용
    router.push('/').then(() => {
      setTimeout(() => {
        // 홈으로 완전히 이동한 후 해시를 추가하여 섹션으로 이동
        window.location.hash = `#${sectionId}`;
      }, 200); // 페이지가 로드되는 시간을 고려하여 약간의 딜레이를 추가
    });
  } else {
    // 현재 홈('/')에 있는 경우 바로 해시 이동
    window.location.hash = `#${sectionId}`;
  }
};

// 현재 활성화된 섹션을 받기 위한 prop
const props = defineProps({
  activeSection: {
    type: String,
    default: 'introduction',
  },
});
</script>

<style scoped>
/* Slimbar에 대한 추가 스타일 */
</style>
