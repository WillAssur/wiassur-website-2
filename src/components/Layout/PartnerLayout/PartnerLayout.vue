<template >
    <div>

        <HeaderComponent :links="links" :extra-links="extraLinks" />
        <RouterView />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { partnerLinks } from '@/utils/links';
import HeaderComponent from '../HeaderComponent.vue';
export default defineComponent({
    name: 'PartnerLayout',
    components: { HeaderComponent },

    data() {
        return {


            show: false,
            links: partnerLinks.links,
            extraLinks: partnerLinks.extraLinks,

        };
    },
});
</script>
<style lang="">
    
</style>../../../utils/links.js