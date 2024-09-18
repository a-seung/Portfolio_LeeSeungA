<template>
  <section id="project1" class="section-group">
    <div class="project-group">
      <p class="project-big-title">Project 1 : bebig</p>
      <div class="flex gap-8">
        <div class="w-1/2">
          <img :src="login" alt="login" />
        </div>
        <div class="w-1/2">
          <p class="project-small-title">사용자 소비 성향에 맞춘 자산 관리 서비스</p>
          <div>
            <p>KB IT's Your Life 5기 종합 실무 프로젝트 <br /><span class="font-bold">총 30팀 중 최우수 프로젝트</span>로 선정✨</p>
            <p>사용자의 실제 계좌를 연결하여 자산을 분석하고, <br />소비 유형 설문을 진행하여 개인화된 미션을 받아볼 수 있는 서비스 입니다.</p>
          </div>
          <div>
            <li>프로젝트 기간 : 2024. 09. 06 ~ 2024. 10. 16</li>
            <li>F/E 2명, B/E 4명, 문서화 및 배포 1명</li>
          </div>
          <div>
            <a href="">배포 링크 <i class="fa-solid fa-arrow-right"></i></a>
            <a href="">GitHub <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="project-group">
      <p class="project-small-title">👩🏻‍💻 내가 기여한 부분</p>
      <div>
        <div>
          <p>(1) DB 구축</p>
        </div>
        <div>
          <p>(2) 반응형 CSS</p>
        </div>
        <div>
          <p>(3) Pagenation & Infinity Scroll</p>
        </div>
      </div>
    </div>

    <div class="project-group">
      <p class="project-small-title">🚨 트러블 슈팅</p>
    </div>

    <div class="project-group">
      <p class="project-small-title">😿 아쉬웠던 점</p>
    </div>

    <div class="h-80"></div>
  </section>
</template>

<script setup>
import login from '@/assets/images/project1/login.png';
</script>
