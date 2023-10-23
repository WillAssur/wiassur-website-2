<template>
    <div class="container">
      <main-section :image-url="imageUrl" :alt-text="altText" :title="title" :description="description" :button-text="buttonText" :steps-text="stepsText" :steps="steps" />
    <StepsSection></StepsSection>
    </div>
    
  </template>

  <script lang="ts">
  import MainSection from './MainSection.vue'
  import StepsSection from './StepsSection.vue';
  

  export default {
    components: {
      MainSection,
      StepsSection
    },
    props: ['imageUrl', 'altText', 'title', 'description', 'buttonText', 'stepsText', 'steps']
  }
  </script>

  <style scoped>
  .container {
    max-width: 100%;
    height: auto;
    padding-top: 16px;
    background: #F6EEF3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 48px;
  }
  </style>
