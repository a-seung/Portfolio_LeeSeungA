<template>
  <section id="skill-set" class="section-group">
    <h1 class="big-title">Skill Set</h1>
    <div>
      <div class="skill-set-content">
        <p class="line-content-title">Backend</p>
        <div class="skill-set-group">
          <div class="skill-item">
            <img :src="javaIcon" alt="Java" class="skill-image" />
            <p class="skill-name">Java</p>
          </div>
          <div class="skill-item">
            <img :src="springIcon" alt="Spring" class="skill-image" />
            <p class="skill-name">Spring</p>
          </div>
          <div class="skill-item">
            <img :src="mysqlIcon" alt="MySQL" class="skill-image" />
            <p class="skill-name">MySQL</p>
          </div>
          <div class="skill-item">
            <img :src="mariaDbIcon" alt="MariaDB" class="w-12 h-12" />
            <p class="skill-name">MariaDB</p>
          </div>
        </div>
      </div>

      <div class="skill-set-content">
        <p class="line-content-title">Frontend</p>
        <div class="skill-set-group">
          <div class="skill-item">
            <img :src="htmlIcon" alt="HTML" class="skill-image" />
            <p class="skill-name">HTML</p>
          </div>
          <div class="skill-item">
            <img :src="css3Icon" alt="CSS3" class="skill-image" />
            <p class="skill-name">CSS3</p>
          </div>
          <div class="skill-item">
            <img :src="javascriptIcon" alt="JavaScript" class="skill-image" />
            <p class="skill-name">JavaScript</p>
          </div>
          <div class="skill-item">
            <img :src="vueIcon" alt="Vue" class="skill-image" />
            <p class="skill-name">Vue</p>
          </div>
          <div class="skill-item">
            <img :src="tailwindIcon" alt="TailwindCSS" class="skill-image" />
            <p class="skill-name">Tailwind</p>
          </div>
          <div class="skill-item">
            <img :src="bootstrapIcon" alt="Bootstrap" class="skill-image" />
            <p class="skill-name">Bootstrap</p>
          </div>
        </div>
      </div>

      <div class="skill-set-content">
        <p class="line-content-title">Collaboration Tool</p>
        <div class="skill-set-group">
          <div class="skill-item">
            <img :src="githubIcon" alt="Github" class="skill-image" />
            <p class="skill-name">Github</p>
          </div>
          <div class="skill-item">
            <img :src="gitIcon" alt="Git" class="skill-image" />
            <p class="skill-name">Git</p>
          </div>
          <div class="skill-item">
            <img :src="jiraIcon" alt="Jira" class="skill-image" />
            <p class="skill-name">Jira</p>
          </div>
          <div class="skill-item">
            <img :src="figmaIcon" alt="Figma" class="skill-image" />
            <p class="skill-name">Figma</p>
          </div>
          <div class="skill-item">
            <img :src="slackIcon" alt="Slack" class="skill-image" />
            <p class="skill-name">Slack</p>
          </div>
          <div class="skill-item">
            <img :src="notionIcon" alt="Notion" class="skill-image" />
            <p class="skill-name">Notion</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import javaIcon from '@/assets/SkillSet/backend/Java.png';
import springIcon from '@/assets/SkillSet/backend/Spring.png';
import mysqlIcon from '@/assets/SkillSet/backend/MySQL.png';
import mariaDbIcon from '@/assets/SkillSet/backend/MariaDB.png';

import htmlIcon from '@/assets/SkillSet/frontend/HTML5.png';
import css3Icon from '@/assets/SkillSet/frontend/CSS3.png';
import javascriptIcon from '@/assets/SkillSet/frontend/Javascript.png';
import vueIcon from '@/assets/SkillSet/frontend/Vue.png';
import tailwindIcon from '@/assets/SkillSet/frontend/TailwindCSS.png';
import bootstrapIcon from '@/assets/SkillSet/frontend/Bootstrap.png';

import githubIcon from '@/assets/SkillSet/collaborationTool/Github.png';
import gitIcon from '@/assets/SkillSet/collaborationTool/Git.png';
import jiraIcon from '@/assets/SkillSet/collaborationTool/Jira.png';
import figmaIcon from '@/assets/SkillSet/collaborationTool/Figma.png';
import slackIcon from '@/assets/SkillSet/collaborationTool/Slack.png';
import notionIcon from '@/assets/SkillSet/collaborationTool/Notion.png';
</script>
