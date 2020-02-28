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
        >
            <VueVoter
                slot="voter"
                :publication="publication"
                :user="user"
                @modifiee="modifierPublication($event)"
            ></VueVoter>
        </VuePublicationDetails>
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
        ACTION_CONSULTER_PUBLICATION,
        ACTION_MODIFIER_PUBLICATION,
        ACTION_MODIFIER_PUBLICATION_CONSULTATION
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
    import VueVoter from '../components/VueVoter.vue';
    import { GETTER_USER } from '../../modules/User/UserModuleDefinitions';
    import { User } from '../../modules/User/UserDomaine';

    const publicationModule = namespace('publication');
    const publicationReponseModule = namespace('publicationReponse');
    const userModule = namespace('user');

    @Component({
        components: {
            GabaritPublication,
            VuePublication,
            VuePublicationDetails,
            VuePublicationReponses,
            VuePublicationReponseFormulaire,
            VueVoter
        }
    })
    export default class PagePublication extends Vue {
        @publicationModule.Getter(GETTER_PUBLICATION_CONSULTATION)
        public publication!: Publication;
        @publicationReponseModule.Getter(GETTER_PUBLICATION_REPONSES)
        public publicationReponses!: PublicationReponses;
        @userModule.Getter(GETTER_USER)
        public user!: User;

        @publicationModule.Action(ACTION_CONSULTER_PUBLICATION)
        public consulterPublication!: (id: string) => void;
        @publicationModule.Action(ACTION_MODIFIER_PUBLICATION_CONSULTATION)
        public modifierPublication!: (publication: Publication) => void;
        @publicationReponseModule.Action(ACTION_CHERCHER_PUBLICATION_REPONSES)
        public chercherPublicationReponses!: () => void;
        public nomRoutePublication: string = NomRoutes.PUBLICATIONS;

        protected created(): void {
            this.consulterPublication(this.$route.params['id']);
            // this.chercherPublicationReponses();

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
