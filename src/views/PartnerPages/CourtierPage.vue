<template >
    <div class="page">
        <b-container class="pb-2">
            <b-row class="flex-column-reverse flex-md-row pb-5 pb-md-0">
                <b-col cols="12" sm="6"
                    class="mt-5 mt-md-0 d-flex flex-column align-items-start justify-content-center text-white">
                    <h1>
                        Votre partenaire solide pour les ventes.
                    </h1>

                    <p class="w-75">
                        Augmentez vos ventes avec WiASSUR. Simple. Efficace. Rapide. Sans complication.
                    </p>

                    <b-button variant="primary">Devenez partenaire maintenant</b-button>
                </b-col>
                <b-col cols="1"></b-col>
                <b-col cols=""><img src="/images/partner-hero2.svg" class="w-100 h-100" alt=""></b-col>
            </b-row>
        </b-container>


        <div class="bg-white">
            <b-container class="py-5">
                <b-row>
                    <b-col cols="12" sm="" class="d-flex flex-column align-items-start mb-5 mb-md-0">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">Plus de revenus</h5>
                        <p>
                            Ne perdez plus une affaire. Avec WiASSUR, vous avez accès à toutes les offres sur le marché en
                            quelques minutes seulement.
                        </p>

                    </b-col>
                    <b-col cols="12" sm="" class="d-flex flex-column align-items-start mb-5 mb-md-0">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">Plus de valeurs</h5>
                        <p>
                            Vous bénéficiez de contacts expérimentés et de processus de pointe - de la souscription digitale
                            à la déclaration de sinistre en ligne.
                        </p>

                    </b-col>
                    <b-col cols="12" sm="" class="d-flex flex-column align-items-start mb-5 mb-md-0">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3">Plus d’efficacité</h5>


                    </b-col>
                </b-row>
            </b-container>

            <b-container>
                <div class="d-flex flex-column align-items-center ">
                    <h2 class="text-center">
                        Faites partie du mouvement WiASSUR dès maintenant
                    </h2>

                    <p class="text-center py-4">
                        Avons-nous éveillé votre curiosité ? <br>
                        Votre interlocuteur personnel se fera un plaisir de répondre à toutes vos questions et vous
                        expliquez
                        <br> comment ensemble, nous gagnons.

                    </p>

                    <b-button class="w-100 d-md-none" variant="primary">Nous contacter</b-button>

                    <b-button class="d-none d-md-block" variant="primary">Nous contacter</b-button>
                </div>
            </b-container>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CourtierPage',

})
</script>
<style scoped>
.page {
    background: #61C0C7;


}
</style>