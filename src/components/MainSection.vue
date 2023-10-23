<template>
  <div class="main-section">
    <div class="image-container">
      <!-- Remplacez l'URL de l'image par votre propre URL d'image -->
      <img :src="imageUrl" :alt="altText" />
    </div>
    <Content />
  </div>
</template>

<script lang="ts">
import Content from './Content.vue'

export default {
  components: {
    Content
  },
  data() {
    return {
      imageUrl: 'https://via.placeholder.com/422x412',
      altText: 'placeholder image'
    }
  }
}
</script>




  <style scoped>
  .main-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .image-container {
    width: 422px;
    height: 412px;
  }
  </style>
