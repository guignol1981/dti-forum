<template>
    <GabaritPublication>
        <div>
            <m-link>Retour</m-link>
            <VuePublicationDetails
                slot="header"
                v-if="!!publication"
                :publication="publication"
            ></VuePublicationDetails>
        </div>
        <VuePublicationReponses
            :publicationReponses="publicationReponses"
        ></VuePublicationReponses>
        <template slot="footer">
            <!-- <m-pagination
                class="page-publications__pagination"
                v-model="indexPagination"
                :items-per-page="publicationsParPages"
                :items-total="publications.length"
                @change="scrollToTop()"
            ></m-pagination> -->
        </template>
    </GabaritPublication>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritPublication from '../components/gabarits/GabaritPublication.vue';
    import PublicationVue from '../components/publication/Publication.vue';
    import { namespace } from 'vuex-class';
    import {
        GETTER_PUBLICATION_CONSULTATION,
        ACTION_CONSULTER_PUBLICATION
    } from '../modules/Publications/PublicationModuleDefinition';
    import { Publication } from '../modules/Publications/PublicationDomaine';
    import VuePublicationDetails from '../components/VuePublicationDetails.vue';
    import VuePublicationReponse from '../components/VuePublicationReponse.vue';
    import {
        GETTER_PUBLICATION_REPONSES,
        ACTION_CHERCHER_PUBLICATION_REPONSES
    } from '../modules/PublicationReponse/PublicationReponseModuleDefinitions';
    import { PublicationReponses } from '../modules/PublicationReponse/PublicationReponseDomaine';
    import VuePublicationReponses from '../components/VuePublicationReponses.vue';

    const publicationModule = namespace('publication');
    const publicationReponseModule = namespace('publicationReponse');

    @Component({
        components: {
            GabaritPublication,
            PublicationVue,
            VuePublicationDetails,
            VuePublicationReponses
        }
    })
    export default class PagePublication extends Vue {
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

<style lang="scss" scoped></style>
