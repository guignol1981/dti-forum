<template>
    <PublicationDetailsGabarit>
        <div slot="publication">
            <PublicationVue
                v-if="!!publication"
                :publication="publication"
            ></PublicationVue>
        </div>
        <div slot="publicationReponses">
            <PublicationReponseVue
                v-for="(publicationReponse, index) in publicationReponses"
                :key="index"
                :publicationReponse="publicationReponse"
            ></PublicationReponseVue>
        </div>
    </PublicationDetailsGabarit>
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

    const publicationModule = namespace('publication');
    const publicationReponseModule = namespace('publicationReponse');

    @Component({
        components: {
            PublicationDetailsGabarit,
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
