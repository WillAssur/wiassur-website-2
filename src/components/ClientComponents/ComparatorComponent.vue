<template >
    <div>

        <b-tabs content-class="mt-3" class="custom-tabs" nav-class="custom-tabs-nav">
            <b-tab class="ml-5" title="First" active>
                <p>I'm the first tab</p>
            </b-tab>
            <b-tab title="Second">
                <p>I'm the second tab</p>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script lang="ts">
export default {

    name: 'ComparatorComponent',


}
</script>
<style scoped>
.custom-tabs-nav > .nav-item {
    background: #61C0C7 !important;
}


</style>