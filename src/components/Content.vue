<template>
  <div class="content">
    <div class="title">Déclarer un sinistre ? Facile !</div>
    <div class="description">Si vous avez une police d’assurance WiASSUR, il vous suffit de déclarer un sinistre en ligne ou en agence. Nous nous occupons du reste.</div>
    <div class="button">Déclarer un sinistre</div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Déclarer un sinistre ? Facile !',
      description: 'Si vous avez une police d’assurance WiASSUR, il vous suffit de déclarer un sinistre en ligne ou en agence. Nous nous occupons du reste.',
      buttonText: 'Déclarer un sinistre'
    }
  }
}
</script>



  <style scoped>
  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .description {
    font-size: 16px;
  }

  .button {
    width: 200px;
    height: 40px;
    background-color: #4CAF50;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  </style>
