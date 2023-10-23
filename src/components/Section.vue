<template>
    <!-- Produit pour les particuliers -->
    <div class="section">
        <div class="title">Nos produits pour les particuliers</div>
        <div class="products">
            <div class="product">
                <div class="icon"></div>
                <div class="product-info">
                    <div class="product-title">Automobile</div>
                    <div class="product-description">Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule et aussi tous les autres dommages que pourrait subir votre véhicule.</div>
                </div>
            </div>
            <div class="product">
                <div class="icon"></div>
                <div class="product-info">
                    <div class="product-title">Assurance vie et prévoyance</div>
                    <div class="product-description">Protégez vous contre tous les aléas de la vie liés à votre personne à titre particulier comme professionnel tels que le décès, ou l’invalidité afin d’assurer un avenir à vos proches.</div>
                </div>
            </div>
            <div class="product">
                <div class="icon"></div>
                <div class="product-info">
                    <div class="product-title">Santé et accidents</div>
                    <div class="product-description">Nous prenons en charge vos soins médicaux en cas d’accidents, de maladie et de grossesse à travers un réseau de partenaires médicaux étendu.</div>
                </div>
            </div>
            <div class="product">
                <div class="icon"></div>
                <div class="product-info">
                    <div class="product-title">Voyage</div>
                    <div class="product-description">Voyagez sereinement grâce à une assistance en cas de maladies subites, et des désagréments (Pertes de bagages, retard de vol…) subis au cours de votre voyage.</div>
                </div>
            </div>
            <div class="product">
                <div class="icon"></div>
                <div class="product-info">
                    <div class="product-title">Habitation</div>
                    <div class="product-description">Votre maison est couverte contre les incendies et tous les dommages matériels. En plus, couvrez les conséquences pécuniaires de la responsabilité civile du fait des préjudices causés au tiers par les personnes, les animaux et les choses sous votre garde.</div>
                </div>
            </div>
        </div>
    </div>
    <!-- produit entreprise -->
    <div class="section">
        <div class="title">Nos produits pour les entreprises</div>
        <div class="product-container">
          <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Flotte Automobile</div>
                <div class="product-description">Bénéficier de réductions additionnelles et d’un meilleur suivi de votre parc automobile en regroupant en un seul contrat l’assurance de vos véhicules.</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Responsabilité civile Pro</div>
                <div class="product-description">Assurez-vous contre les conséquences pécuniaires de la responsabilité civile du fait des préjudices causés aux tiers et à vos clients suite à l'inexécution de vos obligations dans le cadre de contrats professionnels.</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Caution</div>
                <div class="product-description">L’assurance caution est un gage de confiance entre le donneur d’ordre (VOUS) et le bénéficiaire qui doit recevoir l'indemnité en cas de non exécution des clauses du contrat.</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Santé et accidents</div>
                <div class="product-description">Tirer le meilleurs de vos employés; protéger les en assurant la prise en charge des soins médicaux en cas d’accidents, de maladie et de grossesse</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Tous risques chantiers</div>
                <div class="product-description">Protéger vos chantiers contre les dommages accidentels pouvant impacter le bon déroulement des travaux et vous entrainer des pertes financières</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Autres risques techniques</div>
                <div class="product-description">Pour tout autre risques sortant du cadre ci-dessus listé, veuillez nous contacter au 1361. Notre équipe technique vous guidera dans le choix des solutions.</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Multirisque professionnelle</div>
                <div class="product-description">Protéger votre patrimoine immobilier et mobilier afin d’assurer la pérennité de vos activités.</div>
            </div>
        </div>
        <div class="product">
            <div class="icon"></div>
            <div class="product-info">
                <div class="product-title">Transport</div>
                <div class="product-description">Quel que soit le type de transport (Terrestre, maritime, aérien), nous vous permettons d’assurer les conséquences pécuniaires du fait des dommages subis par vos marchandises transportées.</div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import Product from './Product.vue'
  
  export default {
    components: {
      Product
    },
    props: ['title', 'products']
  }
  </script>
  
  <style scoped>
  .section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    display: flex;
  }
  
  .title {
    align-self: stretch;
    color: #080507;
    font-size: 39px;
    font-family: Avenir;
    font-weight: 900;
    line-height: 46.80px;
    word-wrap: break-word;
  }
  
  .product-container {
    width: 1176px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 48px;
    display: inline-flex;
  }
  
  .icon {
    width: 59.05px;
    height: 32.90px;
    position: relative;
    /* Ajoutez ici les styles pour l'icône */
  }
  </style>
  