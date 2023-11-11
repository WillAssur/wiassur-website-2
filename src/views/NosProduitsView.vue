<template>
    <div class="page">
      <b-container>
        <h2 class="text-center fw-bold mb-5">Nos produits pour les particuliers</h2>
        <b-row>
          <b-col cols="12" md="6" lg="4" v-for="(item, index) in items" :key="index">
            <b-card class="mb-4" style="height: 317px; background: white; box-shadow: 0px 12px 42px rgba(7, 65, 5, 0.10); border-radius: 16px;">
              <div class="d-flex align-items-center justify-content-center circle"></div>
              <div class="d-flex flex-column align-items-center">
                <h3 class="fw-bold mt-3 mb-2" style="color: #080507; font-size: 20px; font-family: Avenir; font-weight: 800;">{{ item.title }}</h3>
                <p class="text-center px-3" style="color: #080507; font-size: 16px; font-family: Avenir; font-weight: 400;">{{ item.description }}</p>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
  
      <b-container fluid class="mt-5">
        <h1 class="text-center mb-5">Nos produits pour les entreprises</h1>
        <b-row class="d-flex justify-content-center">
          <b-col cols="12" md="6" lg="4" v-for="(product, index) in products" :key="index">
            <b-card class="mb-4" style="height: 317px; background: white; box-shadow: 0px 12px 42px rgba(7, 65, 5, 0.10); border-radius: 16px;">
              <div class="circle d-flex align-items-center justify-content-center"></div>
              <div class="d-flex flex-column align-items-center">
                <h3 class="fw-bold mt-3 mb-2" style="color: #080507; font-size: 20px; font-family: Avenir; font-weight: 800;">{{ product.title }}</h3>
                <p class="text-center px-3" style="color: #080507; font-size: 16px; font-family: Avenir; font-weight: 400;">{{ product.description }}</p>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "NosProduitsView",
    data() {
      return {
        items: [
            
          // ... (votre liste d'articles pour les particuliers)
          {
            title: 'Automobile',
            description: 'Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule et aussi tous les autres dommages que pourrait subir votre véhicule.'
          },
          {
            title: 'Assurance vie et prévoyance',
            description: 'Protégez vous contre tous les aléas de la vie liés à votre personne à titre particulier comme professionnel tels que le décès, ou l’invalidité afin d’assurer un avenir à vos proches.'
          },
          {
            title: 'Santé et accidents',
            description: 'Nous prenons en charge vos soins médicaux en cas d’accidents, de maladie et de grossesse à travers un réseau de partenaires médicaux étendu.'
          },
          {
            title: 'Voyage',
            description: 'Voyagez sereinement grâce à une assistance en cas de maladies subites, et des désagréments (Pertes de bagages, retard de vol…) subis au cours de votre voyage.'
          },
          {
            title: 'Habitation',
            description: 'Votre maison est couverte contre les incendies et tous les dommages matériels. En plus, couvrez les conséquences pécuniaires de la responsabilité civile du fait des préjudices causés au tiers par les personnes, les animaux et les choses sous votre garde.'
          }
        ],
        products: [
          // ... (votre liste de produits pour les entreprises)
          {
            title: "Flotte Automobile",
            description: "Bénéficier de réductions additionnelles et d’un meilleur suivi de votre parc automobile en regroupant en un seul contrat l’assurance de vos véhicules."
          },
          {
            title: "Responsabilité civile Pro",
            description: "Assurez-vous contre les conséquences pécuniaires de la responsabilité civile du fait des préjudices causés aux tiers et à vos clients suite à l'inexécution de vos obligations dans le cadre de contrats professionnels."
          },
          {
            title: "Caution",
            description: "L’assurance caution est un gage de confiance entre le donneur d’ordre (VOUS)  et le bénéficiaire qui doit recevoir l'indemnité en cas de non exécution des clauses du contrat."
          },
        ]
      };
    }
  });
  </script>
  
  <style scoped>
  .page {
    height: 777px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .fw-bold {
    font-weight: 800;
  }
  
  .circle {
    width: 48px;
    height: 48px;
    background: #61C0C7;
    border-radius: 50%;
  }
  </style>
  