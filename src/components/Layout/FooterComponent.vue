<template >
    <b-container class="px-3  footer">
        <div class="mb-5">
            <InternalizationComponent onFooter/>
        </div>
     
        <b-row class=" d-flex flex-column justify-content-md-center">
            <b-col xs="12" class="d-flex flex-column align-items-start justify-content-between">
                <LogoComponent />
                <div class="py-3 py-md-0">
                    <h5>
                        WiASSUR
                    </h5>

                    <span class="d-flex align-items-center mb-1 ">
                        <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                            fill="none">
                            <path
                                d="M13.3335 3.56824H2.66683C1.9335 3.56824 1.3335 4.16824 1.3335 4.90157V12.9016C1.3335 13.6349 1.9335 14.2349 2.66683 14.2349H13.3335C14.0668 14.2349 14.6668 13.6349 14.6668 12.9016V4.90157C14.6668 4.16824 14.0668 3.56824 13.3335 3.56824ZM13.0668 6.40157L8.70683 9.12824C8.2735 9.40157 7.72683 9.40157 7.2935 9.12824L2.9335 6.40157C2.86665 6.36404 2.80811 6.31334 2.76142 6.25254C2.71474 6.19174 2.68087 6.12209 2.66188 6.04782C2.64289 5.97355 2.63916 5.89619 2.65093 5.82044C2.6627 5.74469 2.68972 5.67211 2.73035 5.6071C2.77098 5.5421 2.82438 5.48601 2.88731 5.44223C2.95025 5.39846 3.02141 5.36791 3.09649 5.35244C3.17158 5.33696 3.24902 5.33688 3.32413 5.3522C3.39925 5.36752 3.47047 5.39793 3.5335 5.44157L8.00016 8.2349L12.4668 5.44157C12.5299 5.39793 12.6011 5.36752 12.6762 5.3522C12.7513 5.33688 12.8288 5.33696 12.9038 5.35244C12.9789 5.36791 13.0501 5.39846 13.113 5.44223C13.1759 5.48601 13.2293 5.5421 13.27 5.6071C13.3106 5.67211 13.3376 5.74469 13.3494 5.82044C13.3612 5.89619 13.3574 5.97355 13.3384 6.04782C13.3195 6.12209 13.2856 6.19174 13.2389 6.25254C13.1922 6.31334 13.1337 6.36404 13.0668 6.40157Z"
                                fill="#1A1819" />
                        </svg>
                        bonjour@wiassur.com
                    </span>


                    <span class="d-flex align-items-center ">
                        <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                            fill="none">
                            <path
                                d="M4.41333 8.09494C5.37333 9.98161 6.92 11.5216 8.80667 12.4883L10.2733 11.0216C10.4533 10.8416 10.72 10.7816 10.9533 10.8616C11.7 11.1083 12.5067 11.2416 13.3333 11.2416C13.7 11.2416 14 11.5416 14 11.9083V14.2349C14 14.6016 13.7 14.9016 13.3333 14.9016C7.07333 14.9016 2 9.82828 2 3.56828C2 3.20161 2.3 2.90161 2.66667 2.90161H5C5.36667 2.90161 5.66667 3.20161 5.66667 3.56828C5.66667 4.40161 5.8 5.20161 6.04667 5.94828C6.12 6.18161 6.06667 6.44161 5.88 6.62828L4.41333 8.09494Z"
                                fill="#1A1819" />
                        </svg>
                        1361
                    </span>




                </div>

                <div class="border-top w-100 pt-3 mb-5 mb-md-0 d-flex flex-column">
                    <span>Copyright © 2023</span>
                   
                        <router-link to="#" class="my-1" >Condition d'utilisation</router-link>
                        <router-link  to="#">Politique de confidentialité</router-link>
                        <!-- <LinkComponent className="no-space mt-1" link="#" title="Condition d'utilisation" />
                        <LinkComponent className="no-space mt-1" link="#" title="Politique de confidentialité" /> -->
                   
                </div>
            </b-col>
            <b-col cols="6">
                <b-row>
                    <b-col xs="12" class="mb-4 my-md-2" md="6" v-for="(item, index) in footerLinks" :key="index">
                        <h5> {{ item.sectionTitle }}</h5>
                        <b-row>
                            <b-col v-for="(link, index) in item.links" class="my-1" :md="[item.links.length > 3 ? 6 : 12]"
                                :key="index">
                                <router-link :to="link.href">{{ link.label }}</router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-row class="h-100">
                    <b-col cols="12" class="d-flex my-2 fs-6 flex-column d-none d-md-flex">
                        
                            <InternalizationComponent onFooter/>
                       

                    </b-col>

                    <b-col cols="12" class="d-flex my-2 flex-column">
                        <h5>Social media</h5>
                        <div class="d-flex align-items-center ">
                            <a :href="link.href" target="_blank" v-for="(link, index) in socialLinks" class="me-3"
                                :key="index"> <img height="26" :src="link.img" :alt="link.alt"> </a>
                        </div>
                    </b-col>

                    <b-col cols="12" class="d-flex my-4  flex-column">
                        <h5>WiASSUR App</h5>
                        <div class="d-flex align-items-center ">
                            <a :href="link.href" class="me-3" target="_blank" v-for="(link, index) in appLinks"
                                :key="index"> <img :src="link.img" :alt="link.alt"> </a>
                        </div>
                    </b-col>
                </b-row>

            </b-col>
        </b-row>
    </b-container>
</template>
<script  lang="ts">
import LinkComponent from '../UI/LinkComponent.vue';
import LogoComponent from '../UI/LogoComponent.vue';
import SelectComponent from '../UI/SelectComponent.vue';
import InternalizationComponent from './InternalizationComponent.vue';
import { footerLinks, socialLinks, appLinks } from '@/utils/links';
export default {
    name: "FooterComponent",
    components: { LogoComponent, LinkComponent, SelectComponent, InternalizationComponent }
    ,
    data() {
        return {
            footerLinks: footerLinks,
            socialLinks: socialLinks,
            appLinks: appLinks

        }
    }
}

</script>
<style scoped>
h5 {
    text-transform: uppercase;
}

.footer {
    font-size: 13px;
    padding: 50px 0px;
}


@media only screen and (max-width: 500px) {
    .footer{
        padding: 48px 0px;
}

}

</style>