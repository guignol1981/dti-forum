<template>
    <HomeGabarit
        class="publication-details"
        :titre="publication.titre | capitalize"
    >
        <template slot="header">
            <EnteteVue></EnteteVue>
        </template>
        <template class="publication__body">
            <div>
                {{ publication.corps }}
            </div>
            <div>
                <div>
                    <m-icon-button
                        iconName="m-svg__arrow--up"
                        buttonSize="32px"
                        iconSize="20px"
                        skin="light"
                        @click="onUpvoteClicked()"
                    ></m-icon-button>
                    {{ publication.upvoteCount }}
                    <m-icon-button
                        iconName="m-svg__arrow--down"
                        buttonSize="32px"
                        iconSize="20px"
                        skin="light"
                        @click="onDownvoteClicked()"
                    ></m-icon-button>
                    -{{ publication.downvoteCount }}
                </div>
            </div>
            <PublicationReponseVue
                v-for="(publicationReponse, index) in publicationReponses"
                :key="index"
                :publicationReponse="publicationReponse"
            ></PublicationReponseVue>
        </template>
    </HomeGabarit>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { namespace } from 'vuex-class';
    import Component from 'vue-class-component';
    import PublicationDetailsGabarit from '../components/publication/PublicationDetailsGabarit.vue';
    import {
        GETTER_PUBLICATION_REPONSES,
        ACTION_CHERCHER_PUBLICATION_REPONSES
    } from '../modules/PublicationReponse/PublicationReponseModuleDefinitions';
    import { Publication } from '../modules/Publications/PublicationDomaine';
    import {
        GETTER_PUBLICATION_CONSULTATION,
        ACTION_CONSULTER_PUBLICATION
    } from '../modules/Publications/PublicationModuleDefinition';
    import { PublicationReponses } from '../modules/PublicationReponse/PublicationReponseDomaine';
    import PublicationReponseVue from '../components/publication/PublicationReponse.vue';
    import PublicationVue from '../components/publication/Publication.vue';
    import HomeGabarit from '../components/home/HomeGabarit.vue';
    import EnteteVue from '../components/entete/Entete.vue';

    const publicationModule = namespace('publication');
    const publicationReponseModule = namespace('publicationReponse');

    @Component({
        components: {
            EnteteVue,
            HomeGabarit,
            PublicationVue,
            PublicationReponseVue
        }
    })
    export default class PublicationDetailsPage extends Vue {
        @publicationModule.Getter(GETTER_PUBLICATION_CONSULTATION)
        public publication!: Publication;
        @publicationReponseModule.Getter(GETTER_PUBLICATION_REPONSES)
        public publicationReponses!: PublicationReponses;

        @publicationModule.Action(ACTION_CONSULTER_PUBLICATION)
        public consulterPublication!: (id: string) => void;
        @publicationReponseModule.Action(ACTION_CHERCHER_PUBLICATION_REPONSES)
        public chercherPublicationReponses!: () => void;

        protected created(): void {
            this.consulterPublication(this.$route.params['id']);
            this.chercherPublicationReponses();
        }
    }
</script>

<style lang="scss"></style>
