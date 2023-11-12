<template >
    <div class="page">
        <div class="container">
            <b-row class="flex-column-reverse flex-md-row pb-5 pb-md-0">
                <b-col md="4" class="d-flex align-items-start flex-column justify-content-center">
                    <h1>
                        L’assurance, <br>
                        Simple, Efficace
                    </h1>
                    <p class="my-5">
                        Toutes les offres du marché, tous les assureurs. <br class="d-none d-md-inline">
                        Simple, digital, meilleur rapport qualité / prix. <br>
                        C’est l’expérience WiASSUR
                    </p>
                    <b-button variant="primary">
                        Trouver la meilleure offre
                    </b-button>
                </b-col>
                <b-col>
                    <img class="w-100" src="/images/hero-1.svg" alt="">
                </b-col>
            </b-row>
        </div>
        <div class="bg-white section-2">
            <b-container>
                <b-row class="flex-column-reverse flex-md-row">
                    <b-col xs="12" md="5">
                        <div class="d-flex align-items-start flex-column justify-content-center h-100 ">
                            <h2 class="fs-1 mb-3">
                                L’assurance. Mais simple
                            </h2>
                            <p>
                                Que vous changez ou que vous souscrivez une nouvelle police, WiASSUR compare tous les
                                assureurs
                                du marché pour vous permettre de trouver la meilleure offre.
                            </p>
                            <p class="mt-3">
                                Facile et transparent, en ligne ou avec un conseiller, en quelques minutes, souscrivez et
                                soyez
                                assuré.
                            </p>
                        </div>

                    </b-col>

                    <b-col xs="0" md="1">

                    </b-col>

                    <b-col  class="mb-5 mb-md-0">
                        <img class="w-100" src="/images/homepage/image1.svg" alt="">
                    </b-col>
                </b-row>

                <b-row class="mt-5">
                    <b-col class="mb-5 mb-md-0" >
                        <img src="/images/homepage/image2.png" class="w-100" alt="">
                    </b-col>

                    <b-col xs="0" md="1">

                    </b-col>



                    <b-col xs="12" md="5">
                        <div class="d-flex align-items-start flex-column justify-content-center h-100 ">
                            <h2 class="fs-1 mb-3">
                                Le bon conseil… <br>
                                se fait facilement.
                            </h2>
                            <p>
                                Lorsque l’innovation rencontre le service. Faites comme nos milliers de clients et de
                                partenaires de confiance le choix de WiASSUR.
                            </p>
                            <p class="mt-3">
                                Faites vous conseiller et accompagner tout au long de votre vie d’assuré sur tous nos canaux
                                de communication.
                            </p>
                        </div>

                    </b-col>
                </b-row>


                <b-row class="flex-column-reverse flex-md-row mt-5">
                    <b-col xs="12" md="5">
                        <div class="d-flex align-items-start flex-column justify-content-center h-100 ">
                            <h2 class="fs-1 mb-3">
                                Bienvenue dans votre monde… protégé.
                            </h2>
                            <p>
                                La vie nous réserve bien des surprises. Ne pas avoir la bonne couverture peut coûter cher.
                                Vous vous demandez comment choisir dans la grande jungle de l'assurance ?
                            </p>
                            <p class="mt-3">
                                Nos conseillers indépendants sont expérimentés et compétents pour que vous ne vous perdiez
                                pas.
                            </p>
                        </div>

                    </b-col>


                    <b-col xs="0" md="1">

                    </b-col>

                    <b-col class="mb-5 mb-md-0">
                        <img class="w-100" src="/images/homepage/image3.png" alt="">
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <b-container style="padding: 48px 12px;">
            <div class="d-flex align-items-center  flex-column">
                <h2 class="fs-1 w-75 text-center w-md-100">
                    Pourquoi utiliser WiASSUR ?
                </h2>

                <div class=" d-flex flex-column flex-md-row align-items-center justify-content-around w-100 my-5">
                    <div class="mt-4 mt-md-0 d-flex flex-column align-items-center">
                        <img src="/images/homepage/whywia/icon1.svg" alt="">
                        <h3 class="mt-3">Simple</h3>
                    </div>
                    <div class="mt-4 mt-md-0 d-flex flex-column align-items-center">
                        <img src="/images/homepage/whywia/icon2.svg" alt="">
                        <h3 class="mt-3">Digital</h3>
                    </div>
                    <div class="mt-4 mt-md-0 d-flex flex-column align-items-center">
                        <img src="/images/homepage/whywia/icon3.svg" alt="">
                        <h3 class="mt-3">Efficace</h3>
                    </div>
                </div>

                <b-button class="w-100 w-md-auto" variant="primary">En savoir plus</b-button>

                <div class="last-card my-5 d-none d-block ">
                    <div class="d-flex justify-content-between ">
                        <div class="d-flex flex-column justify-content-center">
                            <h3 class="fs-1">
                                Besoin d’aide ? On est là
                            </h3>
                            <span class="fw-bold">Parlez à un conseiller</span>
                            <span class="fw-bold">Vous pouvez poser toutes vos questions, sur tous nos canaux.</span>
                        </div>

                        <img class="position-absolute right-0" style="right:0; top: -140px; bottom: 0; "
                            src="/images/wibot.svg" alt="">
                    </div>
                </div>

            </div>
        </b-container>


        <div class="last-card my-md-5 ">
                    <div class=" ">
                        <div class="d-flex flex-column justify-content-center">
                            <h3 class="fs-1">
                                Besoin d’aide ? On est là
                            </h3>
                            <span class="fw-bold">Parlez à un conseiller</span>
                            <span class="fw-bold">Vous pouvez poser toutes vos questions, sur tous nos canaux.</span>
                        </div>

                       
                    </div>
                </div>



    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage',
    components: {

    },
})




</script>
<style scoped >
.page {
    background: #F6EEF3;

    padding-bottom: 40px;

}

.section-2 {
    padding: 64px 0;
}

.last-card {
    margin: 10px;
    width: 100%;
    background: url('/images/other/need-help.png'), #FFB800 50% / cover no-repeat;
    background-blend-mode: multiply;
    padding: 60px;
    border-radius: 32px;
    position: relative;
}




@media only screen and (max-width: 500px) {
    .last-card {
    margin: 0px;
    width: 100%;
    background: url('/images/other/need-help.png'), #FFB800 50% / cover no-repeat;
    background-blend-mode: multiply;
    padding: 50px 30px;
    border-radius: 0px;
    position: relative;
} 

.last-card h3 {
    font-size: 39px !important;
}

.page {
   

    padding-bottom: 0px;

}
}
</style>