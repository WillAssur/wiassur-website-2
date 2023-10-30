<template >
    <div class="bg-white p-5">
        <b-container>

            <h2 class="mb-0 fs-1">Rencontrez notre équipe de direction</h2>

            <b-row cols="4">
                <b-col  v-for="(team, index) in teams" :key="index">
                    <MemberComponent :name="team.name" :role="team.role" :image="team.image" />
                </b-col>
            </b-row>


        </b-container>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MemberComponent from './UI/MemberComponent.vue';

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