<template>
    <div v-if="options.length > 0"  v-for="(option, index) in options" :class="[{ 'option-selected': selected === option?.value }]" :key="index"
         @click="selectOptions(option.value as string)" class="d-flex flex-column mt-2 option">
        <div class="d-flex align-items-center justify-content-between">
            <span v-if="label">{{ prefix }} {{ label }}</span>

            <div class="d-flex align-items-center"> 
                <div v-if="option.prefix" class="me-2 d-flex align-items-center justify-content-center" style="height: 25px ;width: 25px; border-radius: 2rem ; background-color: #D9D9D9; overflow: hidden;">
                    <img :src="option.prefix" style="object-fit: cover;" class="w-100 h-100" alt="">
                </div>
                <span>{{ option.text }} </span>
            </div>


            <div style=" padding: 1px 5px; border-radius: 2rem ; background-color: #eaeaea;" class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#eaeaea" height="1em" width="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "CustomRadio",
    props: {
        label: {
            type: String,
            default: null,
        },
        options: {
            type: Array as any ,
            default: [
                ,
                {
                    text: "Option 1",
                    value: "Option 1",
                    prefix: "/images/flags/CI.svg"
                },
                {
                    text: "Option 2",
                    value: "Option 2",
                    prefix: "/images/flags/CI.svg"
                },
            ],
        },

        optionSelected: {
            type: String,
            default: "Option 1",
        },

        prefix: {
            type: String,
            default: "",
        },

        action: {
            type: Function,
            default: () => { },

        }
    },
   
    data() {
        return {
            selected: "",
        };
    },

    methods: {
        selectOptions(value: string) {
            this.selected = value;

            this.action(value);
            this.$emit("optionChildSelected", value);
        },
    },
  mounted() {
    this.selected = this.optionSelected;},
};
</script>
<style scoped>
.option {
    /* padding: 1rem; */
    font-weight: 600;

    min-width: 180px;
    padding: 8px 12px;
    transition: all .3s;
    cursor: pointer;
    border-radius: 8px;
}

.option:hover {

    background: var(--White, #F6EEF3);

}

.option-selected {
    background: var(--grey-100, #eed5e3) !important;
}
.option-selected > div > div:last-child {
background-color: #E0338A !important;
}
</style>
