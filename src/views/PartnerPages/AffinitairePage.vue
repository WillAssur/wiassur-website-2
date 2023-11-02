<template >
    <div class="page">
        <b-container class="pb-2">
            <b-row>
                <b-col cols="6" class="d-flex flex-column align-items-start justify-content-center text-white">
                    <h1>
                        Ensemble. <br>Plus simple. <br>Plus efficace 
                    </h1>

                    <p class="w-75">
                        Commençons la conversation sur la façon dont nous pouvons vous aider à améliorer la proposition de
                        valeur pour vos clients. Nous sommes flexibles, modulaires et évolutifs et offrons des solutions sur
                        mesure pour différents besoins d'assurance embarquée.
                    </p>


                </b-col>
                <b-col cols="1"></b-col>
                <b-col cols=""><img src="/images/partner-hero2.svg" class="w-100 h-100" alt=""></b-col>
            </b-row>
        </b-container>


        <div class="bg-white">
            <b-container class="py-5">
                <b-row>
                    <b-col class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3 w-75">Un savoir faire
                            éprouvé</h5>


                    </b-col>
                    <b-col style="margin: 0 64px;" class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3 w-75">Plus de croissance et
                            de rentabilité</h5>


                    </b-col>
                    <b-col class="d-flex flex-column align-items-start">
                        <img src="/images/icon-filled.png" alt="">

                        <h5 class="mt-3 mb-3 w-75">Adapté à vos besoins
                            (et non l’inverse)</h5>


                    </b-col>
                </b-row>
            </b-container>

            <div class="d-flex flex-column align-items-center " style="margin: 48px 0 ">
                <h2>
                    Faites partie du mouvement WiASSUR 
                </h2>

                <p class="text-center pt-4 pb-2 w-50">
                    Peu importe le secteur d’activité, l’automobile, la banque, le retail, les services financiers… la protection de vos produits, services et clients devraient être une priorité dans votre proposition de valeur. Avec WiASSUR, concevez un programme d’assurance sur mesure et bénéficiez des dernières technologies d’intégration pour offrir à vos clients une expérience simple et transparente.
                </p>

                <p>
                    Votre interlocuteur personnel se fera un plaisir de répondre à toutes vos questions.
                </p>

                <b-button variant="primary">Nous contacter</b-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'AffinitairePage',

})
</script>
<style scoped>
.page {
    background: #61C0C7;


}
</style>