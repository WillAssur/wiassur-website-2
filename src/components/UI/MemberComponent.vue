<template >
    <div class="mt-5">
        <div class="image-container">
            <img :src="image" class="w-100 h-100" style="object-fit: cover;" :alt="name">
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
    /* width: 340px; */
    height: 320px;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
}

@media only screen and (max-width: 500px) {

.image-container {
    width: 100%;
}

}




</style>