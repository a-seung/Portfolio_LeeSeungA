<template>
  <div class="">
    <section id="introduction" >
      <Introduction />
    </section>
    <section id="skill-set">
      <SkillSet />
    </section>
    <section id="project">
      <Project />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch  } from 'vue'
import Introduction from './Introduction.vue'
import SkillSet from './SkillSet.vue'
import Project from './Project.vue'
import Contact from './Contact.vue'

// 사이드바 배경색 상태
const activeSection = ref('introduction')

// 현재 컴포넌트에서 부모에게 이벤트로 activeSection을 전달합니다.
const emit = defineEmits(['updateActiveSection'])

// Intersection Observer 설정
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    console.log(`Entry: ${entry.target.id}, IsIntersecting: ${entry.isIntersecting}`);
    if (entry.isIntersecting) {
      console.log(`Visible section: ${entry.target.id}`);
      activeSection.value = entry.target.id;
    }
  });
}

// Intersection Observer 초기화
const observeSections = () => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // 스크롤이 발생하는 컨테이너를 root로 설정
    threshold: 0.2, // 섹션의 60%가 화면에 들어왔을 때 활성화
  })

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })

    // 기본 섹션 설정
    activeSection.value = 'introduction'
  emit('updateActiveSection', 'introduction')
}


// activeSection 변경 시 부모로 전달
watch(activeSection, (newSection) => {
  emit('updateActiveSection', newSection)
})

onMounted(() => {
  observeSections(); // 섹션 감지 함수 호출

})

onUnmounted(() => {
  document.querySelectorAll('section').forEach((section) => {
    observer.unobserve(section)
  })
})
</script>
