<template >
    <div>
        <HeaderComponent :links="links" :extra-links="extraLinks" />
        <RouterView/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '../HeaderComponent.vue';
import { clientLinks } from '@/utils/links';
export default defineComponent({
    name: 'ClientLayout',
    components: { HeaderComponent },
    data() {
        return {
            show: false,
            links: clientLinks.links,
            extraLinks: clientLinks.extraLinks
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