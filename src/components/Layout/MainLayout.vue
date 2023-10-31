<template>
    <div class="position-relative h-100 ">


        <div :class="theming" ref="header" class="position-fixed " style="left: 0; right: 0; opacity: 1; z-index: 100000;">
            <div class="d-flex justify-content-between align-items-center py-2 container w-100">
                <b-nav  class="theming-plus">

                    <LinkComponent title="Clients" link="/" />
                    <LinkComponent title="Partenaires" link="/partner" />

                </b-nav>

                <SelectComponent label="Côte d’Ivoire (FR)">
                    <InternalizationComponent />
                </SelectComponent>

            </div>
        </div>




        <div class="min-h-100vh ">
            <RouterView />
        </div>



        <FooterComponent />
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import FooterComponent from './FooterComponent.vue';
import LinkComponent from '../UI/LinkComponent.vue';
import SelectComponent from '../UI/SelectComponent.vue';
import InternalizationComponent from './InternalizationComponent.vue';

export default defineComponent({
    name: 'MainLayout',
    components: { FooterComponent, LinkComponent, SelectComponent, InternalizationComponent },

    methods: {
        handleScroll() {
            const scrollingDiv: any = this.$refs.header;
            if (100 - window.scrollY > 0) {
                scrollingDiv.style.opacity = 1 - window.scrollY/10;
            }
        },
    },

    computed: {
        theming() {
            if (this.$route.name === 'partner-home-page') {
                return 'text-white';
            } else {
                return 'text-black';
                
            }
            
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }

})





</script>
<style >
.min-h-100vh {
    min-height: 100vh;
}

.text-white {
    color: white !important;

    fill: white !important;
}

.text-white .theming-plus *{
    color: white !important;
}
</style>