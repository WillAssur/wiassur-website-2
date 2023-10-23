<template>
    <div class="container">
      <div class="main-section">
        <div class="image-container">
          <!-- Remplacez l'URL de l'image par votre propre URL d'image -->
          <img src="https://via.placeholder.com/422x412" alt="placeholder image" />
        </div>
        <div class="content">
          <div class="title">Déclarer un sinistre ? Facile !</div>
          <div class="description">Si vous avez une police d’assurance WiASSUR, il vous suffit de déclarer un sinistre en ligne ou en agence. Nous nous occupons du reste.</div>
          <div class="button">Déclarer un sinistre</div>
        </div>
      </div>
      <div class="steps-section">
        <!-- Ajoutez ici les étapes de déclaration du sinistre -->
        <div style="width: 1512px; height: 421px; padding-left: 162px; padding-right: 162px; padding-top: 60px; padding-bottom: 60px; background: #F2FCFC; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 42px; display: inline-flex">
          <div class="step-text" style="align-self: stretch; height: 102px; text-align: center;">Seulement 3 étapes<br/>pour déclarer un sinistre avec succès.</div>
          <div class="steps" style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
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
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Ajoutez vos données ici si nécessaire
      };
    },
    methods: {
      // Ajoutez vos méthodes ici si nécessaire
    },
    // Ajoutez votre logique JavaScript ici si nécessaire
  }
  </script>
  
  <style>
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
  /* Ajoutez d'autres styles en fonction de votre mise en page */
  </style>
  