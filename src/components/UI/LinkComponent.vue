<template >
  
        <b-nav-item class="text-black" :to="link" :active="active">{{ title }} </b-nav-item>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'LinkComponent',
    props: {
        active: {
            type: Boolean,
            default: false,

        },
        link: {
            type: String,
            default: '#'
        },
        color: {
            type: String,
            default: 'black'
        },
        title: {
            type: String,
            default: 'Link'
        },
    },

})
</script>
<style >
    .link{
        text-decoration: none !important;
    }
</style>