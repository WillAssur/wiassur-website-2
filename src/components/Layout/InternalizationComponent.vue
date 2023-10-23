<template >
  <b-tabs content-class="mt-3" style="width: 230px;" class="custom-tabs" fill>
    <b-tab title="Pays" active>
     <div>
      <CustomRadio :options="optionsPays"/>
     </div>
    </b-tab>
    <b-tab title="Langue">
      <div>
      <CustomRadio :options="optionsLangue"/>
     </div>
    </b-tab>


  </b-tabs>
</template>
<script lang="ts">
import CustomRadio from '../UI/CustomRadio.vue';
export default {
  name: 'InternalizationComponent',
  components: {
    CustomRadio
  },
  data() {
    return {
      optionsLangue: [
        { value: 'FR', text: 'Francais' , prefix:'/images/flags/FR.svg' },
        { value: 'EN', text: 'Anglais' , prefix:'/images/flags/EN.svg' },

      ],
      optionsPays: [
        {
          value: 'CI',
          text: 'Cote d\'Ivoire',
          prefix: '/images/flags/CI.svg'
        },
        {
          value: 'GH',
          text: 'Ghana',
          prefix: '/images/flags/GH.svg'
        },
        {
          text: 'Mali',
          value: 'ML',
          prefix: '/images/flags/ML.svg'
        },
        {
          value: 'SN',
          text: 'Senegal',
          prefix: '/images/flags/SN.svg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.internalisation>.tabs> {
  background-color: antiquewhite !important;
  border-bottom: solid 3px #007bff !important;
}
</style>