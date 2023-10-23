<template>
    <div class="steps-section">
        <!-- Ajoutez ici les étapes de déclaration du sinistre -->
        <div style="width: 1512px; height: 421px; padding-left: 162px; padding-right: 162px; padding-top: 60px; padding-bottom: 60px; background: #F2FCFC; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 42px; display: inline-flex">
          <div class="step-text" style="align-self: stretch; height: 102px; text-align: center;">Seulement 3 étapes<br/>pour déclarer un sinistre avec succès.</div>
          <div class="steps" style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
        <Step></Step>
          </div>
        </div>
    </div>
  </template>

<script lang="ts">
import Step from './Step.vue'

export default {
  components: {
    Step
  }
}
</script>

  <style scoped>
  .steps-section {
    width: 1512px;
    height: 421px;
    padding-left: 162px;
    padding-right: 162px;
    padding-top: 60px;
    padding-bottom: 60px;
    background: #F2FCFC;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 42px;
    display: inline-flex;
  }

  .step-text {
    align-self: stretch;
    height: 102px;
    text-align: center;
    color: #080507;
    font-size: 39px;
    font-family: Avenir;
    font-weight: 900;
    line-height: 46.80px;
    word-wrap: break-word;
  }

  </style>
