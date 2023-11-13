<template >
    <div class="bg-white py-5 p-md-5">
        <b-container>

            <h2 class="mb-0 fs-1">Rencontrez notre équipe de direction</h2>

            <b-row >
                <b-col cols="12" sm="2" lg="3" class=""  v-for="(team, index) in teams" :key="index">
                    <MemberComponent :name="team.name" :role="team.role" :image="team.image" />
                </b-col>
            </b-row>


        </b-container>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MemberComponent from '@/components/UI/MemberComponent.vue';

export default defineComponent({
    name: 'MembersComponent',
    components: {
        MemberComponent
    },
    data() {
        return {
            teams: [
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },
                {
                    image: 'images/teams/photo.png',
                    name: 'Laura Jane',
                    role: 'Fondateur & CEO',
                },

            ]
        }
    }
})
</script>
<style ></style>