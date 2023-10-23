<template>
    <Container1/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Container1 from "../components/Container1.vue";
  
  export default defineComponent({
    name: "App",
    components:{
    Container1
}
  });
  </script>