<template >
    <div class="page">
        <b-container class="pb-5">
            <b-row>
                <b-col cols="6" class="d-flex flex-column align-items-start justify-content-center text-white">
                    <h1 class="w-75">
                        Devenez un <br>
                        conseiller WiASSUR
                    </h1>

                    <p class="w-75">
                        La sécurité est synonyme de liberté.
                        Avec WiASSUR, vous obtenez les deux.
                        Nous vous proposons une rémunération fixe,
                        commission comprise, et nous générons des prospects
                        pour vous gratuitement. Vous restez indépendant. </p>

                    <b-button variant="primary">Devenez conseiller maintenant</b-button>
                </b-col>
                <b-col cols="1"></b-col>
                <b-col cols=""><img src="/images/partner-hero3.svg" class="w-100 h-100" alt=""></b-col>
            </b-row>
        </b-container>


        <div class="bg-white">
            <b-container class="py-5">
                <b-row>
                    <b-col class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">Des conditions optimales</h5>
                        <p>
                            Nous vous offrons des possibilités de carrière et de promotion ainsi que des possibilités de
                            rémunérations attrayantes, supérieures à la moyenne du marché.
                        </p>

                    </b-col>
                    <b-col style="margin: 0 64px;" class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">Une formule simple</h5>
                        <p>
                            Un accompagnement tout au long de votre carrière, l’accès à de nouveaux clients grâce à la
                            génération de prospects en interne - abordables et de haute qualité.
                        </p>

                    </b-col>
                    <b-col class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">La transparence</h5>

                        <p>Des outils en ligne et sur mobile pour mieux vendre et suivre vos clients. Le paiement de vos
                            commissions en temps réel par Mobile Money ou virement.</p>
                    </b-col>
                </b-row>
            </b-container>

            
            <div class="d-flex flex-column align-items-center w-50 mx-auto " style="margin: 48px 0 ">
                <h2 class="text-center">
                    Faites partie du mouvement WiASSUR <br> dès maintenant
                </h2>

                <p class="text-center py-2">
                    WiASSUR est un courtier indépendant. Nous vous donnons accès à tout le marché de l'assurance en vous
                    associant à notre compétence technique et des outils de dernière génération.
                    Aidez les clients à trouver la meilleure offre parmi toutes les options.
                </p>

                <p>
                    Votre interlocuteur personnel se fera un plaisir de répondre à toutes vos questions.
                </p>

                <b-button class="my-3" variant="primary">Nous contacter</b-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ConseillerPage',

})
</script>
<style scoped>
.page {
    background: #61C0C7;


}</style>