<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Container from './components/Container.vue'
import MainSection from './components/MainSection.vue'
import ImageContainer from './components/ImageContainer.vue'
import Content from './components/Content.vue'
import StepsSection from './components/StepsSection.vue'
import Step from './components/Step.vue'
</script>

<script lang="ts">
export default {
  props: {
    imageUrl: String,
    altText: String,
    title: String,
    description: String,
    buttonText: String,
    stepsText: String,
    steps: Array
  },
  components: {
    HelloWorld,
    Container,
    MainSection,
    ImageContainer,
    Content,
    StepsSection,
    Step
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
