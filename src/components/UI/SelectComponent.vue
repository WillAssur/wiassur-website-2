<template>
    <div ref="select" class="position-relative">
        <div @click="toggle" class='d-flex cursor-pointer justify-between align-items-center p-2'>
            <span>{{ label }}</span>

            <img src="/icons/caret-down.svg" class='ml-1' height="20" alt="">
        </div>


        <b-card v-if="show"  class="mt-2 position-absolute top-3 ">
            <slot></slot>
        </b-card>


    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SelectComponent',
    props: {
        label: {
            type: String,
            default: 'Option'
        },

    },
    data() {
        return {
            show: false
        }
    }

    , methods: {
        toggle() {
            this.show = !this.show

            if (this.show) {

                window.addEventListener('click', this.detectClickOutside);

            } else {
                window.removeEventListener('click', this.detectClickOutside);
            }
        }

        ,
        detectClickOutside() {
            const select: any = this.$refs.select
            document.addEventListener('click', (e) => {
                if (select && !select.contains(e.target)) {
                    this.show = false
                }
            })
        }


        , removeEventListener() {
            window.removeEventListener('click', this.detectClickOutside);
        }
    },


})
</script>
<style lang="">
    
</style>