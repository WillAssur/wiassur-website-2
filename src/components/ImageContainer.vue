<template>
  <div class="image-container">
    <img :src="imageUrl" :alt="altText" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      imageUrl: 'https://via.placeholder.com/422x412',
      altText: 'placeholder image'
    }
  }
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>


<style scoped>
.image-container {
  width: 422px;
  height: 412px;
}
</style>
