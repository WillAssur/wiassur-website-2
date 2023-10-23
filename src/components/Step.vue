<template>
  
            <div class="step" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div class="step-number" style="text-align: center;">1.</div>
              <div class="step-title">Raconte-nous ce qui s’est passé ?</div>
              <div class="step-description">Réponds à quelques questions. Nous saurons ainsi ce qui s’est passé.</div>
            </div>
            <div class="step" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div class="step-number" style="text-align: center;">2.</div>
              <div class="step-title">Transmets nous les documents.</div>
              <div class="step-description">Garde bien tous les documents importants (photos, factures, constats, témoignages…)</div>
            </div>
            <div class="step" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div class="step-number" style="text-align: center;">3.</div>
              <div class="step-title">Patiente.</div>
              <div class="step-description">C’est fait! Maintenant, c’est à nous de jouer. Nous te contacterons avec des mises à jour de statut.</div>
            </div>
          
</template>

<script lang="ts">


export default {
  
  data() {
    return {
      steps: [
        {
          numero: '1.',
          titre: 'Raconte-nous ce qui s’est passé ?',
          description: 'Réponds à quelques questions. Nous saurons ainsi ce qui s’est passé.'
        },
        {
          numero: '2.',
          titre: 'Transmets nous les documents.',
          description: 'Garde bien tous les documents importants (photos, factures, constats, témoignages…)'
        },
        {
          numero: '3.',
          titre: 'Patiente.',
          description: 'C’est fait! Maintenant, c’est à nous de jouer. Nous te contacterons avec des mises à jour de statut.'
        }
      ]
    }
  }
}
</script>

<style scoped>

.step-text {
    color: #080507;
    font-size: 39px;
    font-family: Avenir;
    font-weight: 900;
    line-height: 46.80px;
    word-wrap: break-word;
  }
  
  .step {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }
  
  .step-number {
    text-align: center;
    color: #080507;
    font-size: 39px;
    font-family: Avenir;
    font-weight: 900;
    line-height: 46.80px;
    word-wrap: break-word;
  }
  
  .step-title {
    color: #080507;
    font-size: 20px;
    font-family: Avenir;
    font-weight: 800;
    line-height: 30px;
    word-wrap: break-word;
  }
  
  .step-description {
    width: 313px;
    color: #080507;
    font-size: 16px;
    font-family: Avenir;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }
</style>
