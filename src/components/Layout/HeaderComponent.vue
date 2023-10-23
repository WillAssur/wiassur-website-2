<template>
    <div ref="header" class="position-fixed w-100 left-0 right-0" style="top: 60px;">
        <div class="container ">
            <div class="d-flex align-items-center bg-white justify-content-between rounded-4 shadow  p-3">
                <div class="d-flex align-items-center">
                    <LogoComponent />
                    <b-badge variant="warning " class="px-3 py-2 text-dark rounded-5 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="me-1">
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>

                        <a href="tel:1361" class="text-black fs-6">1361</a>
                    </b-badge>


                    <b-badge variant="primary">
                        kokok
                    </b-badge>
                </div>

                <b-nav class="ms-n3">


                    <LinkComponent v-for="(link, index) in links" :key="index" :title="link.title" :link="link.link" />

                </b-nav>

                <div>
                    <b-button class="me-2" variant="primary">{{ extraLinks[0].title }}</b-button>
                    <b-button variant="outline-primary">{{ extraLinks[1].title }}</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import LogoComponent from "../UI/LogoComponent.vue";
import LinkComponent from "../UI/LinkComponent.vue";

export default {
    components: { LogoComponent, LinkComponent },
    props: {
        links: {
            type: Array,
            default: [
                {
                    title: "Link1",
                    link: "#"
                }
            ]
        },
        extraLinks: {
            type: Array,
            default: [
                {
                    title: "Option1",
                    link: "#"
                },
                {
                    title: "Option2",
                    link: "#"
                }
            ]
        }
    },
    methods: {
        handleScroll() {
            const scrollingDiv: any = this.$refs.header;
            if (60 - window.scrollY > 15) {
                scrollingDiv.style.top = `${60 - window.scrollY}px`;
            }




        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>
<style></style>
