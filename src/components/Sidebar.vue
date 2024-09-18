<template>
  <aside class="fixed w-60 h-screen bg-secondary py-8">
    <div class="flex flex-col items-center">
      <div @click.prevent="goHome" class="home-button">이승아의 포트폴리오</div>
      <div class="rounded-full my-6 overflow-hidden  w-44 h-56">
        <img src="@/assets/images/profileImg.jpg" alt="Profile Image" class="w-full h-full object-cover rounded-[50%] aspect-[3/4]" />
      </div>
      <!-- 프로필 이미지 자리 -->
      <nav class="w-full mt-6">
        <div class="text-center">
          <div :class="['menu-item', activeSection === 'introduction' ? 'menu-item-active' : '']">
            <button @click.prevent="navigateToSection('introduction')">Introduction</button>
          </div>
          <div :class="['menu-item', activeSection === 'skill-set' ? 'menu-item-active' : '']">
            <button @click.prevent="navigateToSection('skill-set')">Skill Set</button>
          </div>
          <div :class="['menu-item', activeSection === 'project' ? 'menu-item-active' : '']">
            <button @click.prevent="navigateToSection('project')">Project</button>
          </div>
          <div :class="['menu-item', activeSection === 'contact' ? 'menu-item-active' : '']">
            <button @click.prevent="navigateToSection('contact')">Contact</button>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 라우터 인스턴스 가져오기
const router = useRouter();

// Home 페이지로 이동하는 함수
const goHome = () => {
  router.push('/')
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
/* Sidebar에 대한 추가 스타일은 여기에 작성합니다. */
</style>
