<template>
    <HomeGabarit
        :publications="publications"
        @publicationSupprimee="onPublicationSupprimee($event)"
    >
        <div slot="header"></div>
        <div slot="corps">
            <PublicationVue
                v-for="(publication, index) in publications"
                :key="index"
                :publication="publication"
                @supprimee="onPublicationSupprimee($event)"
            ></PublicationVue>
            <PublicationFormulaireVue
                :ouvert="formulairePublicationOuvert"
                @publicationCree="onPublicationCree($event)"
                @ferme="onFormulaireFerme()"
            ></PublicationFormulaireVue>
        </div>
        <div slot="footer">
            <m-button @click="onAjouterPublicationClicked()"
                >Ajouter Publication</m-button
            >
        </div>
    </HomeGabarit>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { namespace } from 'vuex-class';
    import {
        GETTER_PUBLICATIONS,
        ACTION_CHERCHER_PUBLICATIONS,
        ACTION_SUPPRIMER_PUBLICATION,
        ACTION_AJOUTER_PUBLICATION
    } from '../modules/Publications/PublicationModuleDefinition';
    import {
        Publications,
        Publication
    } from '../modules/Publications/PublicationDomaine';
    import HomeGabarit from '../components/home/HomeGabarit.vue';
    import PublicationVue from '../components/publication/Publication.vue';
    import PublicationFormulaireVue from '../components/publication/PublicationFormulaire.vue';

    const publicationModule = namespace('publication');

    @Component({
        components: {
            HomeGabarit,
            PublicationVue,
            PublicationFormulaireVue
        }
    })
    export default class HomePage extends Vue {
        @publicationModule.Getter(GETTER_PUBLICATIONS)
        public publications!: Publications;

        @publicationModule.Action(ACTION_CHERCHER_PUBLICATIONS)
        public chercherPublications!: () => void;
        @publicationModule.Action(ACTION_AJOUTER_PUBLICATION)
        public ajouterPublication!: (publication: Publication) => void;
        @publicationModule.Action(ACTION_SUPPRIMER_PUBLICATION)
        public supprimerPublication!: (id: string) => void;

        public formulairePublicationOuvert: boolean = false;

        protected created(): void {
            this.chercherPublications();
        }

        public onAjouterPublicationClicked(): void {
            this.formulairePublicationOuvert = true;
        }

        public onPublicationCree(publication: Publication): void {
            this.ajouterPublication(publication);
        }

        public onPublicationSupprimee(id: string): void {
            this.supprimerPublication(id);
        }

        public onFormulaireFerme(): void {
            this.formulairePublicationOuvert = false;
        }
    }
</script>

<style scoped lang="scss"></style>
