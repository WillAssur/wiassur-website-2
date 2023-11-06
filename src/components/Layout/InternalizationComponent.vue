
<!-- :label="dataselect.optionsPays.text + ' (' + dataselect.optionsPays.value + ')'" -->

<template >
  <SelectComponent :src="dataselect?.optionsPays?.prefix"
    :label="dataselect?.optionsPays?.text + ' (' + dataselect?.optionsLangue?.value + ')'">
    <b-tabs content-class="mt-3" style="width: 230px;" class="custom-tabs" fill>
      <b-tab title="Pays" active>
        <div>
          <CustomRadio @optionChildSelected="selectOptionsChildCountry" :options="optionsPays"
            :optionSelected="dataselect?.optionsPays?.value" />
          <b-button @click="selectPays" :disabled="paysSelected === dataselect?.optionsPays" class="w-100 mb-2 mt-3" variant="primary">Enregistrer</b-button>
        </div>
      </b-tab>
      <b-tab title="Langue">
        <div>
          <CustomRadio @optionChildSelected="selectOptionsChildLangue" :options="optionsLangue"
            :optionSelected="dataselect?.optionsLangue?.value" />
        </div>
      </b-tab>


    </b-tabs>
  </SelectComponent>
</template>
<script lang="ts">
import CustomRadio from '../UI/CustomRadio.vue';
import SelectComponent from '../UI/SelectComponent.vue';
export default {
  name: 'InternalizationComponent',
  components: {
    CustomRadio, SelectComponent
  },
  data() {



    return {

      optionChildSelected: '',

      dataselect: null as any,

      optionsLangue: [
        { value: 'FR', text: 'Francais', prefix: '/images/flags/FR.svg' },
        { value: 'EN', text: 'Anglais', prefix: '/images/flags/EN.svg' },

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
      ] as any[]

      , paysSelected: null as any



    }
  }

  ,
  methods: {
    selectOptionsChildCountry(value: string) {
      this.paysSelected = this.optionsPays.find((option: any) => option.value === value)
    },

    selectPays() {


      console.log(this.paysSelected !== this.dataselect?.optionsPays , 'omomomomom');

      if (this.paysSelected !== this.dataselect?.optionsPays) {
        this.dataselect = {
          ...this.dataselect,
          optionsPays: this.paysSelected
        }

      }



    },


    selectOptionsChildLangue(value: string) {
      this.dataselect = {
        ...this.dataselect,
        optionsLangue: this.optionsLangue.find((option: any) => option.value === value)
      }
    }
  },

  mounted() {
    this.dataselect = {
      optionsLangue: this.optionsLangue[0],
      optionsPays: this.optionsPays[0],
    }

    this.paysSelected = this.dataselect.optionsPays;
  },
}
</script>
<style scoped>
.internalisation>.tabs> {
  background-color: antiquewhite !important;
  border-bottom: solid 3px #007bff !important;
}
</style>