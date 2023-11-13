<template>
  <div class="page">
    <b-container>
      <b-row class="py-3 flex-column-reverse flex-md-row">
        <b-col class="d-flex align-items-start flex-column justify-content-center">
          <h1>Déclarer un sinistre ? <br> Facile !</h1>
          <p class="my-md-5">
            Si tu as une police d’assurance WiASSUR, il te suffit de déclarer un
            sinistre en ligne ou en agence. Nous nous occupons du reste.
          </p>
          <b-button variant="primary"> Déclarer un sinistre </b-button>
        </b-col>

        <b-col> </b-col>
        <b-col>
          <img class="w-100 h-100" src="/images/hero-2.svg" alt="" />
        </b-col>
      </b-row>
    </b-container>

    <div class="bg-second ">
      <b-container class="d-flex flex-column align-items-center">
        <h2 class="fs-1 text-center">
          Seulement 3 étapes <br />
          pour déclarer un sinistre avec succès.
        </h2>

        <b-row class="mt-5">
          <b-col cols="12" sm=3 class="d-flex flex-column mb-5 mb-md-0">
            <h3 class="fs-1 fw-bolder">1.</h3>
            <span class="fw-bolder fs-5 my-2">Raconte-nous ce qui s’est passé ?</span>
            <span class="">Réponds à quelques questions. Nous saurons ainsi ce qui s’est
              passé.</span>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col cols="12" sm=3 class="d-flex flex-column mb-5 mb-md-0">
            <h3 class="fs-1 fw-bolder">2.</h3>
            <span class="fw-bolder fs-5 my-2">Transmets nous les documents.</span>
            <span class="">Garde bien tous les documents importants (photos, factures,
              constats, témoignages…)</span>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col cols="12" sm=3 class="d-flex flex-column mb-5 mb-md-0">
            <h3 class="fs-1 fw-bolder">3.</h3>
            <span class="fw-bolder fs-5 my-2">Patiente.</span>
            <span class="">C’est fait! Maintenant, c’est à nous de jouer. Nous te
              contacterons avec des mises à jour de statut.</span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  <!-- <Container/> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Container from "../components/Container.vue"

export default defineComponent({
  name: "App",
  components: {
    // Container
  },
});
</script>

<style scoped>
.page {
  background-color: #f6eef3;
}

.bg-second {
  background-color: #f2fcfc;
  padding: 60px 0px;
}



@media only screen and (max-width: 500px) {
  
}
</style>
