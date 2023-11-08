<template >
    <div>

        <b-tabs content-class="mt-3" nav-class="custom-tabs-nav">
            <b-tab v-for="(item, index) in dataComparator" :title="item?.label" :key="index">


                <b-container class="my-5">

                    <b-row>
                        <b-col>

                            <div v-for="(branch, index) in item?.branches" :key="index" class="accordion custom-accordion  "
                                role="tablist">
                                <b-button class="w-100 button-accordion  " :aria-controls="'accordion-' + index" block
                                    v-b-toggle="'accordion-' + index">
                                    <div class="d-flex align-items-center ">
                                       <!-- {{'https://master.wia.ci/uploads/'+ branch.photo}}  -->
                                        <img width="32" height="32"  style="object-fit: contain;" :src="'https://master.wia.ci/uploads/' + branch.photo.toString()"  alt="">
                                       <span class="ms-3 fs-5">{{ branch.label }}</span>

                                    </div>


                                </b-button>
                                <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                                    <div class="d-flex justify-content-between w-100 px-3">

                                        <p class="w-75">
                                            Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule
                                            et aussi tous les autres dommages que pourrait subir votre véhicule.
                                        </p>


                                        <p>
                                            kkk
                                        </p>

                                    </div>

                                </b-collapse>
                            </div>
                            <!-- <div class="accordion custom-accordion  " role="tablist">
                                <b-button class="w-100 button-accordion  " block v-b-toggle.accordion-2>
                                    <div class="d-flex align-items-center ">
                                        <span>icon</span><span class="ms-3 fs-5">Automobile</span>

                                    </div>


                                </b-button>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <div class="d-flex justify-content-between w-100 px-3">

                                        <p class="w-75">
                                            Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule
                                            et aussi tous les autres dommages que pourrait subir votre véhicule.
                                        </p>


                                        <p>
                                            kkk
                                        </p>

                                    </div>

                                </b-collapse>
                            </div> -->
                        </b-col>
                        <b-col cols="2"></b-col>
                        <b-col>
                            <div class="right-box custom-accordion">

                            </div>
                        </b-col>
                    </b-row>

                </b-container>

            </b-tab>






            <!-- <b-tab title="Particulier" active>

                <b-container class="my-5">

                    <b-row>
                        <b-col>

                            <div class="accordion custom-accordion  " role="tablist">
                                <b-button class="w-100 button-accordion  " block v-b-toggle.accordion-1>
                                    <div class="d-flex align-items-center ">
                                        <span>icon</span><span class="ms-3 fs-5">Automobile</span>

                                    </div>


                                </b-button>
                                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                    <div class="d-flex justify-content-between w-100 px-3">

                                        <p class="w-75">
                                            Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule
                                            et aussi tous les autres dommages que pourrait subir votre véhicule.
                                        </p>


                                        <p>
                                            kkk
                                        </p>

                                    </div>

                                </b-collapse>
                            </div>
                            <div class="accordion custom-accordion  " role="tablist">
                                <b-button class="w-100 button-accordion  " block v-b-toggle.accordion-2>
                                    <div class="d-flex align-items-center ">
                                        <span>icon</span><span class="ms-3 fs-5">Automobile</span>

                                    </div>


                                </b-button>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <div class="d-flex justify-content-between w-100 px-3">

                                        <p class="w-75">
                                            Couvrez votre responsabilité civile du fait de l’utilisation de votre véhicule
                                            et aussi tous les autres dommages que pourrait subir votre véhicule.
                                        </p>


                                        <p>
                                            kkk
                                        </p>

                                    </div>

                                </b-collapse>
                            </div>
                        </b-col>
                        <b-col cols="2"></b-col>
                        <b-col>
                            <div class="right-box custom-accordion">

                            </div>
                        </b-col>
                    </b-row>

                </b-container>



            </b-tab>
            <b-tab title="Entreprise">
                <p>I'm the second tab</p>
            </b-tab> -->
        </b-tabs>
    </div>
</template>
<script lang="ts">
export default {

    name: 'ComparatorComponent',

    data() {
        return {
            dataComparator: null as any,
        }
    },

    methods: {
        async fetchJokes() {
            try {
                const response = await fetch('https://form.wia.ci/api/get/surveys/comparateur', {
                    method: 'GET',
                    headers: {
                        Zone: 'TEST',
                    }
                });
                const data = await response.json();

                console.log( data.categories, 'omomomomom');

                this.dataComparator = data.categories
            } catch (error) {
                console.error(error);
            }
        }
    }

    , mounted() {
        this.fetchJokes()
    },
}


</script>
<style >
.custom-accordion {
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.12);

    margin: 16px 0px;
}

.right-box {

    background: var(--brand-blue, #61C0C7) !important;
    padding: 48px 24px;
    color: var(--White, #F6EEF3);
    display: flex;
    align-items: center;
    flex-direction: column;

}

.custom-tabs-nav> :first-child {
    margin-left: 10vw;
}


.button-accordion,
.button-accordion:hover,
.button-accordion:active,
.button-accordion:active {
    display: flex;
    width: 448px;
    border-radius: 0 !important;
    /* justify-content: space; */
    align-items: center;
    background: none !important;
    color: var(--Black, #080507) !important;
    border: none;
    padding: 16px !important;
}
</style>