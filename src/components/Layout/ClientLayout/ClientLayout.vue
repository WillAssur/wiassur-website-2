<template >
    <div>
        <HeaderComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '../HeaderComponent.vue';
export default defineComponent({
    name: 'ClientLayout',
    components: { HeaderComponent },
    data() {
        return {
            show: false
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        }
    },

})


</script>
<style lang="">
    
</style>