<template>
    <div ref="select" class="position-relative">
        <div @click="toggle" class='d-flex cursor-pointer justify-between align-items-center p-2'>
            <span>{{ label }}</span>

            <img src="/icons/caret-down.svg" class='ms-3' height="20" alt="">
        </div>



        <transition name="fade-in-top">

        <b-card v-if="show" style="top: 100%; right: 0; border: none;" class="mt-2 position-absolute  zindex shadow">
            <slot></slot>
        </b-card>

    </transition>


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
<style>
    .zindex{
        z-index: 999999;
    }   


    .fade-in-top-enter-active, .fade-in-top-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-in-top-enter, .fade-in-top-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

</style>