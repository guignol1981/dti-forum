<template>
    <div class="page-publication">
        <m-link
            :unvisited="true"
            icon-name="m-svg__chevron--left"
            icon-size="12px"
            :url="{ name: nomRoutePublication }"
            >Publications</m-link
        >
        <VuePublicationDetails
            v-if="!!publication"
            class="m-u--margin-top--xs"
            :publication="publication"
        ></VuePublicationDetails>
        <VuePublicationReponseFormulaire
            class="m-u--margin-top--xl"
        ></VuePublicationReponseFormulaire>
        <VuePublicationReponses
            class="m-u--margin-top--xxl"
            :publicationReponses="publicationReponses"
        ></VuePublicationReponses>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import PublicationVue from '../components/publication/Publication.vue';
    import { namespace } from 'vuex-class';
    import VuePublicationDetails from '../components/VuePublicationDetails.vue';
    import VuePublicationReponses from '../components/VuePublicationReponses.vue';
    import {
        GETTER_PUBLICATION_CONSULTATION,
        ACTION_CONSULTER_PUBLICATION
    } from '../../modules/Publications/PublicationModuleDefinition';
    import {
        GETTER_PUBLICATION_REPONSES,
        ACTION_CHERCHER_PUBLICATION_REPONSES
    } from '../../modules/PublicationReponse/PublicationReponseModuleDefinitions';
    import { PublicationReponses } from '../../modules/PublicationReponse/PublicationReponseDomaine';
    import { Publication } from '../../modules/Publications/PublicationDomaine';
    import GabaritPublication from '../gabarits/GabaritPublication.vue';
    import VuePublication from '../components/VuePublication.vue';
    import VuePublicationReponseFormulaire from '../components/VuePublicationReponseFormulaire.vue';
    import { MLinkMode } from '@ulaval/modul-components/dist/components/link/link';
    import { NomRoutes } from '@/router';

    const publicationModule = namespace('publication');
    const publicationReponseModule = namespace('publicationReponse');

    @Component({
        components: {
            GabaritPublication,
            VuePublication,
            VuePublicationDetails,
            VuePublicationReponses,
            VuePublicationReponseFormulaire
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

        public nomRoutePublication: string = NomRoutes.PUBLICATIONS;

        protected created(): void {
            this.consulterPublication(this.$route.params['id']);
            this.chercherPublicationReponses();

            this.$scrollTo.goToTop();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .page-publication {
        width: 100%;
    }
</style>
