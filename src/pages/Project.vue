<template>
  <section id="project" class="section-group">
    <h1 class="big-title">Project</h1>
    <div>
      <div class="line-content">
        <div>
          <button @click="goToProject1"><img src="/src/assets/SkillSet/backend/Java.png" alt=""></button>
        </div>
        <p class="line-content-title"></p>
      </div>
      <div class="line-content">
        <p class="line-content-title">Frontend</p>
      </div>
      <div class="line-content">
        <p class="line-content-title">Collaboration Tool</p>
      </div>
    </div>
    <div class="h-80"></div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 버튼 클릭 시 /project1 경로로 이동하는 함수
const goToProject1 = () => {
  router.push({ name: 'Project1' })
}
</script>
