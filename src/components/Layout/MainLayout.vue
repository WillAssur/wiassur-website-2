<template>
    <div class="position-relative h-100 ">

        <div class="d-flex justify-content-between align-items-center py-2 container w-100">
            <b-nav>

                <LinkComponent title="Clients" link="/home" />
                <LinkComponent title="Partenaires" link="/partner/home" />

            </b-nav>

            <SelectComponent label="Côte d’Ivoire (FR)">
                <InternalizationComponent />
            </SelectComponent>

        </div>



        <div>

            
            <RouterView />
        </div>



        <FooterComponent />
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import FooterComponent from './FooterComponent.vue';
import LinkComponent from '../UI/LinkComponent.vue';
import  SelectComponent from '../UI/SelectComponent.vue';
import InternalizationComponent from './InternalizationComponent.vue';

export default defineComponent({
    name: 'MainLayout',
    components: { FooterComponent, LinkComponent, SelectComponent, InternalizationComponent },



})





</script>
<style ></style>