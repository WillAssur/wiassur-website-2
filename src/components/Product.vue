<template>
    <div class="product">
      <div class="icon"></div>
      <div class="product-info">
        <div class="product-title">{{ product.title }}</div>
        <div class="product-description">{{ product.description }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['product']
  }
  </script>
  
  <style scoped>
  .icon {
    width: 59.05px;
    height: 32.90px;
    position: relative;
    /* Ajoutez ici les styles pour l'icône */
  }

  .info-details {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
    display: flex;
  }
  
  .info-title {
    color: #080507;
    font-size: 16px;
    font-family: Avenir;
    font-weight: 800;
    line-height: 24px;
    word-wrap: break-word;
  }
  
  .info-description {
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }
  </style>
  