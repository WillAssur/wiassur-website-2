<template>
    <div class="container1">
      <Section></Section>
      
    </div>
  </template>
  
  <script lang="ts">
  import Section from './Section.vue'
  
  
  
  export default {
    components: {
      Section,
      
      
    },
    data() {
      return {
        sections: [
          // Ajoutez vos sections ici
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .container1 {
    width: 1512px;
    height: 2599.90px;
    padding-top: 16px;
    background: #F6EEF3;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
    display: inline-flex;
  }
  </style>
  