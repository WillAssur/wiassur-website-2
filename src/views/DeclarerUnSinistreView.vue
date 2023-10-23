<template>
  <Container/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "../components/Container.vue"

export default defineComponent({
  name: "App",
  components:{
    Container
  }
});
</script>