<template >
    <div class="mt-5">
        <div class="image-container">
            <img :src="image" :alt="name">
        </div>
        <div class="mt-3">
            <h3 class="fs-5">{{ name }}</h3>
            <p>{{ role }}</p>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'MemberComponent',
    props: {
        name: {
            type: String,
            default: 'Loua Kahal'
        },

        role: {
            type: String,
            default: 'Founder & CEO'
        },
        image: {
            type: String,
            default: ''
        }

    }
})
</script>
<style >
.image-container {
    width: 340px;
    height: 320px;
    object-fit: cover;
}
</style>