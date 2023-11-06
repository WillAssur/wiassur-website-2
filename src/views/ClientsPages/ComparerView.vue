<template >
    <div class="page">
       
        <b-container class="d-flex flex-column align-items-center">
        <h2 class="fs-1 text-center">
            Trouvez la meilleure assurance simplement en 3 étapes :
        </h2>

        <b-row class="my-5">
          <b-col class="d-flex flex-column">
            <h3 class="fs-1 fw-bolder">1.</h3>
            <span class="">Vous sélectionnez les polices qui vous intéressent</span>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col class="d-flex flex-column">
            <h3 class="fs-1 fw-bolder">2.</h3>
            <span class="">Vous recevez toutes les offres du marché selon les garanties et le prix</span>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col class="d-flex flex-column">
            <h3 class="fs-1 fw-bolder">3.</h3>
            <span class="">Souscrivez à l’offre la mieux adaptée pour vous et faites vous livrer votre police.</span>
          </b-col>
        </b-row>
      </b-container>



      <ComparatorComponent/>



    </div>
</template>
<script lang="ts">

import ComparatorComponent from '@/components/ClientComponents/ComparatorComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage',
    components: {
    ComparatorComponent
},
})




</script>
<style scoped >
.page {
    background: #F6EEF3;

    padding-bottom: 40px;

}


</style>