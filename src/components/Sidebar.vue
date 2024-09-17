<template>
  <aside class="fixed w-60 h-screen bg-secondary py-10">
    <div class="flex flex-col items-center">
      <div>이승아의 포트폴리오</div>
      <div class="rounded-full my-6 overflow-hidden  w-44 h-56">
        <img src="@/assets/images/profileImg.jpg" alt="Profile Image" class="w-full h-full object-cover rounded-[50%] aspect-[3/4]" />
      </div>
      <!-- 프로필 이미지 자리 -->
      <nav class="w-full my-10">
        <div class="text-center">
          <div :class="['menu-item', activeSection === 'introduction' ? 'menu-item-active' : '']">
            <a href="#introduction">Introduction</a>
          </div>
          <div :class="['menu-item', activeSection === 'skill-set' ? 'menu-item-active' : '']">
            <a href="#skill-set">Skill Set</a>
          </div>
          <div :class="['menu-item', activeSection === 'project' ? 'menu-item-active' : '']">
            <a href="#project">Project</a>
          </div>
          <div :class="['menu-item', activeSection === 'contact' ? 'menu-item-active' : '']">
            <a href="#contact">Contact</a>
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
  console.log("Home 버튼 클릭됨");
  router.push('/')
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
