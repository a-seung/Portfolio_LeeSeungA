<template>
  <section id="project" class="section-group">
    <h1 class="big-title">🎨 Project</h1>
    <div>
      <div class="line-content">
        <div @click="goToProject1" class="project-intro">
          <img :src="beBig" alt="프로젝트1" class="project-title-img">
          <div>
            <p class="project-small-title">사용자 소비 성향에 맞춘 자산 관리 서비스</p>
            <p class="project-text-group">사용자의 실제 계좌를 연결하여 자산을 분석하고, <br />소비 유형 설문을 진행하여 개인화된 미션을 받아볼 수 있는 서비스 입니다.</p>
          </div>
        </div>
        <p class="line-content-title"></p>
      </div>

      <div class="line-content">
        <div>
          <button @click="goToProject2">프로젝트2</button>
        </div>
        <p class="line-content-title"></p>
      </div>
    </div>
    <div class="h-80"></div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import beBig from '@/assets/images/project1/beBig.png';

const router = useRouter();

// 버튼 클릭 시 /project1 경로로 이동하는 함수
const goToProject1 = () => {
  router.push({ name: 'Project1' });
};

const goToProject2 = () => {
  router.push({ name: 'Project2' });
};
</script>
