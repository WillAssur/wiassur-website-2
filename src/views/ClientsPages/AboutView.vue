<template >
    <div class="page">
        <b-container>
            <b-row class="flex-column-reverse flex-md-row">
                <b-col cols="12" sm="6" class="d-flex flex-column align-items-start justify-content-center">
                    <h1>
                        Nous sommes une équipe (une famille) d’assureur mais avant tout d’assurés
                    </h1>
                    <div class="d-flex flex-column flex-md-row w-100 align-md-items-center fs-5  my-4">

                        <span class="fw-bolder ">
                            Parce que l’assurance, c’est
                        </span>

                        <div class="d-flex mt-4 mt-md-0">
                            <b-badge class="ms-md-3 badge-special1 w-100 ">la
                                sérénité</b-badge>
                            <b-badge class="ms-2  badge-special2 w-100 ">la
                                protection</b-badge>
                        </div>



                    </div>


                    <p class="w-md-75">
                        WiASSUR a été fondé avec une vision : rendre l’assurance meilleure. Dans toutes les décisions que
                        nous prenons, l’expérience client détermine nos actions.
                    </p>
                </b-col>
                <b-col cols="1"></b-col>
                <b-col cols=""><img src="/images/hero-3.svg" class="w-100 h-100" alt=""></b-col>
            </b-row>
        </b-container>

        <div class="second-section bg-white py-3 py-md-5">
            <b-container class="d-flex flex-column align-items-center">

                <h2 class="fs-1 py-3">
                    Un nouveau départ
                </h2>

                <p class="w-md-50 pb-5 text-center">
                    On a tous eu une expérience désastreuse avec l’assurance. C’est comme en amour. La vie est belle et
                    pleine de surprises. L’important c’est de pouvoir faire face à ces évènements. nous sommes là pour vous
                    accompagner tout au long de votre vie.
                </p>

                <div class="d-flex flex-column align-items-center">
                    <h3 class="fs-1 py-3">
                        Le coeur de notre ADN
                    </h3>
                    <div class="d-flex fw-bolder flex-column flex-md-row justify-content-around mt-3 ">

                        <div class="d-flex mt-5 mt-md-0 flex-column align-items-center">
                            <img src="/images/icon-filled.png" alt="">
                            <span class="w-75 text-center mt-2">
                                Nous sommes authentiques
                            </span>
                        </div>
                        <div class="d-flex mt-5 mt-md-0 flex-column align-items-center">
                            <img src="/images/icon-filled.png" alt="">
                            <span class="w-75 text-center mt-2">
                                Nous rendons les choses possibles
                            </span>
                        </div>
                        <div class="d-flex mt-5 mt-md-0 flex-column align-items-center">
                            <img src="/images/icon-filled.png" alt="">
                            <span class="w-75 text-center mt-2">
                                Nous communiquons clairement
                            </span>
                        </div>
                        <div class="d-flex mt-5 mt-md-0 flex-column align-items-center">
                            <img src="/images/icon-filled.png" alt="">
                            <span class="w-75 text-center mt-2">
                                Nous jouons
                                en équipe
                            </span>
                        </div>
                        <div class="d-flex mt-5 mt-md-0 flex-column align-items-center">
                            <img src="/images/icon-filled.png" alt="">
                            <span class="w-75 text-center mt-2">
                                Nous sommes à vos côtés
                            </span>
                        </div>


                    </div>
                </div>

            </b-container>
        </div>

        <b-container>
            <b-row class="pt-5">
                <b-col cols="12" sm="4" class="d-flex flex-column justify-content-center">
                    <h2 class="mb-4 fs-1">Nos équipes locales.</h2>

                    <p style="width: 80%;">
                        Lorsqu’on dit proche de vous, on l’est vraiment.
                    </p>
                    <div class="w-75">


                        <div>
                            <b-badge class=" mt-2 badge-special1  ">Côte d’Ivoire</b-badge>
                            <b-badge class="ms-2 mt-2  badge-special2 rotate ">Sénégal</b-badge>
                            <b-badge class=" mt-2  badge-special1 ">Ghana</b-badge>
                            <b-badge class="ms-2 mt-2  badge-special2 rotate ">Mali</b-badge>
                        </div>
                    </div>


                </b-col>
                <b-col></b-col>
                <b-col cols="12" sm="6">

                    <img class="w-100 mt-5 mt-md-0" src="/images/other/carte-dafrique.svg" alt="">
                </b-col>
            </b-row>
        </b-container>

        <MembersComponent />

        <div class="bg-white">
            <b-container class=" py-md-5 d-flex flex-column align-items-center">
                <h2 class="py-3 py-md-1">Tous nos partenaires engagés</h2>
                <p class="  text-center">
                    On a tous eu une expérience désastreuse avec l’assurance. C’est comme en amour. La vie est belle et
                    pleine
                    de surprises. L’important c’est de pouvoir faire face à ces évènements. nous sommes là pour vous
                    accompagner
                    tout au long de votre vie.
                </p>



                <!-- <div class="d-flex justify-content-around w-100 partners">
                 

                    <img src="/images/partners/atlanta.svg" alt="atlanta">
                    <img src="/images/partners/sanlam.svg" alt="atlanta">
                    <img src="/images/partners/amsa.svg" alt="atlanta">
                    <img src="/images/partners/wafa-assurance.svg" alt="atlanta">
                    <img src="/images/partners/nsia.svg" alt="atlanta">
                    <img src="/images/partners/sunu.svg" alt="atlanta">
                    <img src="/images/partners/laLoyale.svg" alt="atlanta">
                    <img src="/images/partners/comar.svg" alt="atlanta">
                    <img src="/images/partners/atlantique.svg" alt="atlanta">




                </div> -->

                <b-row>
                    <b-col cols="4" sm="" class=" ms-md-3 partners"> <img src="/images/partners/atlanta.svg" alt="atlanta">
                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners"><img src="/images/partners/sanlam.svg" alt="atlanta">
                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners"><img src="/images/partners/amsa.svg" alt="atlanta">
                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/wafa-assurance.svg" alt="atlanta">

                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/nsia.svg" alt="atlanta">

                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/sunu.svg" alt="atlanta">

                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/laLoyale.svg" alt="atlanta">

                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/comar.svg" alt="atlanta">

                    </b-col>
                    <b-col cols="4" sm="" class=" ms-md-3 partners">
                        <img src="/images/partners/atlantique.svg" alt="atlanta">

                    </b-col>
                </b-row>


            </b-container>
        </div>

    </div>
</template>
<script lang="ts">
import MembersComponent from '@/components/ClientComponents/MembersComponent.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    components: { MembersComponent }
})
</script>
<style scoped>
.page {
    background: #F6EEF3;

    /* padding-bottom: 40px; */

}

.partners>img {
    width: 100px;
}
</style>