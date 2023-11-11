<template>
    <div ref="select" :class="{'onFooter':onFooter}" class="position-relative  ">
     
        <div @click="toggle" class='d-flex cursor-pointer justify-between align-items-center py-2 '>
            <img :src="src" class="rounded-5 me-2" :alt="src">

            <span>{{ label }}</span>

          
            <transition name="rotater">
                <svg :class="{'rotate':show}" xmlns="http://www.w3.org/2000/svg" class='ms-3' height="1.3rem"
                viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            </transition>
              
           
           
        </div>



        <transition name="fade-in-top">

            <b-card v-if="show" style="top: 100%; right: 0; border: none;" class="mt-2  position-absolute  zindex shadow">
                <div class="scoped-color">
                    <slot></slot>
                </div>

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
        src: {
            type: String,
            default: '/images/flags/CI.svg'
        }
        ,onFooter:{
            type:Boolean,
            default:false
        }

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
<style scoped>

.onFooter{
    padding: 5px 15px;
    width: max-content;
    border-radius: 10rem;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.048);
}
.scoped-color  > * {
    color: black !important;
}
.zindex {
    z-index: 999999;
}


.fade-in-top-enter-active,
.fade-in-top-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-in-top-enter,
.fade-in-top-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.rotater-enter-active, .rotater-leave-active {
  transition: transform 0.3s;
}

.rotater-enter, .rotater-leave-to {
  transform: rotate(90deg); 
}


</style>