<template>
    <VueListePublications
        class="page-publications"
        :publications="publications"
        @ajouter-publication="ajouterPublication($event)"
        @modifier-publication="modifierPublication($event)"
        @supprimer-publication="supprimerPublication($event)"
    >
        <h1 class="m-u--visually-hidden">Publications</h1>
    </VueListePublications>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { namespace } from 'vuex-class';
    import {
        GETTER_PUBLICATIONS,
        ACTION_CHERCHER_PUBLICATIONS,
        ACTION_AJOUTER_PUBLICATION,
        ACTION_SUPPRIMER_PUBLICATION,
        ACTION_MODIFIER_PUBLICATION
    } from '../../modules/Publications/PublicationModuleDefinition';
    import {
        Publication,
        Publications
    } from '../../modules/Publications/PublicationDomaine';
    import { ScrollToDuration } from '@ulaval/modul-components/dist/utils/scroll-to/scroll-to';
    import VueListePublications from '../components/VueListePublications.vue';
    import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';

    const publicationModule = namespace('publication');

    @Component({
        components: {
            VueListePublications
        },
        mixins: [MediaQueries]
    })
    export default class PagePublication extends Vue {
        @publicationModule.Getter(GETTER_PUBLICATIONS)
        public publications!: Publications;

        @publicationModule.Action(ACTION_CHERCHER_PUBLICATIONS)
        public chercherPublications!: () => void;
        @publicationModule.Action(ACTION_AJOUTER_PUBLICATION)
        public ajouterPublication!: (publication: Publication) => void;
        @publicationModule.Action(ACTION_MODIFIER_PUBLICATION)
        public modifierPublication!: (publication: Publication) => void;
        @publicationModule.Action(ACTION_SUPPRIMER_PUBLICATION)
        public supprimerPublication!: (id: string) => void;

        protected mounted(): void {
            this.chercherPublications();
            this.$scrollTo.goToTop();
        }
    }
</script>

<style scoped lang="scss"></style>
